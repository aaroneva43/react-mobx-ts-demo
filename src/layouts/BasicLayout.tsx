import { Layout, Menu, Icon } from "antd";
import React from "react";
import cx from "./BasicLayout.less";
import { YearProgress } from "../components/YearProgress";
import Tesseract from "tesseract.js";

const { Header, Sider, Content } = Layout;

export class BasicLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleResolve = () => {
    Tesseract.recognize(
      "https://tesseract.projectnaptha.com/img/eng_bw.png",
      "eng",
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      alert(text);
    });
  };

  render() {
    return (
      <Layout className={cx("basic_layout")}>
        <Sider
          className={cx("sider")}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={cx("logo")} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span onClick={this.handleResolve}>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Icon
              className={cx("trigger")}
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <YearProgress />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content>
          <div className={cx("footer")}>
            Ant Design ??2018 Created by Ant UED
          </div>
        </Layout>
      </Layout>
    );
  }
}
