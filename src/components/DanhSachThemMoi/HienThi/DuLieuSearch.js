import React, { Component } from 'react';
import Dilieu from './DuLieuSearchItem';
class dulieusearch extends Component {
  YearGetNew = () => {
    return new Date().getFullYear();
  }
  render() {
    return (
      <tbody style={{
        fontSize: '10px'
      }}>
        {this
          .props
          .dulieu
          .map((value, key) => {
            return (
              <tr key={key}>
                <th scope="row">{value.key}</th>
                <td>{value.name}</td>
                <td>{value.id}</td>
                <td>{value.dob}</td>
                <td>{value.home}</td>
                <td>{value.address}</td>
                <td>{value.sex}</td>
                <td>{value.nationality}</td>
                <td>{value.doe}</td>
                <td>{this.YearGetNew()}</td>
                <td>{value.ethnicity}</td>
                <td>{value.tonhiao}</td>
                <td>{value.ngayhethan}</td>
                <td>{value.noicap}</td>
                <td><Dilieu dulieuhehe={value.doe} /></td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }
}

export default dulieusearch;