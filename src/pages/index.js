import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"




const IndexPage = () => (
  <Layout>
    <SEO title="grafikveri" />
    <h1>Merhaba</h1>
    <p>Grafik Veri Sitesi</p>
    <p>Çok Yakında Burada</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">ileri</Link>
  </Layout>
)

export default IndexPage
