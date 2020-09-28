import React, { Fragment } from "react"
import DiyHome from "./home/index"
import basicStyle from "./home/index.css"
import YuanLi from "./CSS/flex/1.原理.mdx"
export default function Home() {
  return (
    <Fragment>
      <DiyHome className={basicStyle.body} />
      <article className={basicStyle.info}>
        <YuanLi />
      </article>
    </Fragment>
  )
}
