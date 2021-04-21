import React, {Component} from 'react';

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { 
      // chổ này hơi tricky, trỏ về chính nó
      Component: AsyncComponent.Component 
    };

    componentDidMount(prevProps, prevState) {
      // không re-load nếu đã có rồi
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />
      }
      return null;
    }
  }
  return AsyncComponent;
}