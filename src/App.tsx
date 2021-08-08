import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'antd/dist/antd.less';
import {BasicLayout} from "./layouts/BasicLayout";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user">
        <div>当前未登陆</div>
      </Route>
      <Route path={"/"}>
        <BasicLayout/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
