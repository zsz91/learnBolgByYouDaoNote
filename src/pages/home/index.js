import React, { Fragment, useState } from "react"
import "antd/es/menu/style/index.css"

import { Menu } from "antd"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const { SubMenu } = Menu
export default function Home() {
  const [current, setCurrent] = useState("mail")
  const handleClick = e => {
    console.log("click ", e)
    setCurrent(e.key)
  }
  return (
    <Fragment>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          CSS
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          HTML
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="ES全集">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Fragment>
  )
}
