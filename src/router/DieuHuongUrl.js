import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import asyncComponent from '../router/asyncComponent';
import ComponentsPrivate from '../RouterPrivateAuth/ComponentsPrivate';
class DieuHuongUrl extends Component {
  Home = asyncComponent(() => import('../components/Home/Home').then(module => module.default))
  FormText = asyncComponent(() => import('../components/Mattruoc').then(module => module.default))
  FormTextBack = asyncComponent(() => import('../components/Matsau').then(module => module.default))
  DanhsachTable = asyncComponent(() => import('../components/DanhSachThemMoi').then(module => module.default))
  FormInForVsEdit = asyncComponent(() => import('../components/Thongke').then(module => module.default))
  Language_speed_ai = asyncComponent(() => import('../components/Text-To-Speech').then(module => module.default))
  New = asyncComponent(() => import('../components/DanhSachVanBan').then(module => module.default))
  DataLanguage = asyncComponent(() => import('../components/Text-To-Speech/QuanLyTextVaAudio').then(module => module.default))
  NewDeltal = asyncComponent(() => import('../components/DanhSachVanBan/ChiTietBaiViet/LuuData/NewDeltal').then(module => module.default))
  Palte = asyncComponent(() => import('../components/ThembangTay').then(module => module.default))
  Infos = asyncComponent(() => import('../components/CaiDat/Index').then(module => module.default))
  Login = asyncComponent(() => import('../RedirectAuth/Login').then(module => module.default))
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
          <Route path="/login" component={this.Login} />
        </Switch>
      </div>
    );
  }
}

export default DieuHuongUrl;
