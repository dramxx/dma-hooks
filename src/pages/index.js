import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Index</h1>
    <Link to="/infinite-scroll/" style={{display: 'block'}}>infinite-scroll</Link>
  </Layout>
)

export default IndexPage
