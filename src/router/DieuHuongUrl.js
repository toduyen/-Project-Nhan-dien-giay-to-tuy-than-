import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import asyncComponent from '../router/asyncComponent';
import ComponentsPrivate from '../RouterPrivateAuth/ComponentsPrivate';
class DieuHuongUrl extends Component {
    Home = asyncComponent(() => import ('../components/Home/Home').then(module => module.default))
    FormText = asyncComponent(() => import ('../components/FormText').then(module => module.default))
    FormTextBack = asyncComponent(() => import ('../components/FormTextBack').then(module => module.default))
    DanhsachTable = asyncComponent(() => import ('../components/ListTable').then(module => module.default))
    FormInForVsEdit = asyncComponent(() => import ('../components/Thongke').then(module => module.default))
    Language_speed_ai = asyncComponent(() => import ('../components/Text-To-Speech/Language_speed_ai').then(module => module.default))
    New = asyncComponent(() => import ('../components/ShowData/New').then(module => module.default))
    DataLanguage = asyncComponent(() => import ('../components/DataLanguage').then(module => module.default))
    NewDeltal = asyncComponent(() => import ('../components/ShowData/NewDeltal').then(module => module.default))
    Palte = asyncComponent(() => import ('../components/InsertNoOcr/Palte').then(module => module.default))
    Infos = asyncComponent(() => import ('../components/InfoSystem/Infos').then(module => module.default))
    Protecred = asyncComponent(() => import ('../componentsPublic/Protecred').then(module => module.default))
    Login = asyncComponent(() => import ('../RedirectAuth/Login').then(module => module.default))
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={this.Home}></Route>
                    <Route path="/mat-truoc" component={this.FormText}></Route>
                    <Route path="/mat-sau" component={this.FormTextBack}></Route>
                    <Route path="/danh-sach" component={this.DanhsachTable}></Route>
                    <Route path="/du-lieu-update-no-ai" component={this.Palte}></Route>
                    <ComponentsPrivate path="/thong-ke" component={this.FormInForVsEdit}></ComponentsPrivate>
                    <ComponentsPrivate path="/giong-noi" component={this.Language_speed_ai}></ComponentsPrivate>
                    <ComponentsPrivate path="/hien-thi-danh-sach" component={this.New}></ComponentsPrivate>
                    <ComponentsPrivate path="/du-lieu-giong-noi" component={this.DataLanguage}></ComponentsPrivate>
                    <ComponentsPrivate
                        path="/chi-tiet-tai-lieu/:slug.:id.html"
                        component={this.NewDeltal}></ComponentsPrivate>
                    <ComponentsPrivate path="/thong-tin-he-thong" component={this.Infos}></ComponentsPrivate>
                    {/* react router */}
                    <Route path="/login" component={this.Login}/>
                    <ComponentsPrivate path="/protected" component={this.Protecred}/>
                </Switch>
            </div>
        );
    }
}

export default DieuHuongUrl;
