import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/style.css"
import { Link } from "gatsby" 

export default class BlogList extends React.Component {

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()
    console.log(this.props.pageContext)
  return (

      <Layout> 
      
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}><Link to={node.frontmatter.path}>{title}</Link> </div>
        })}

{!isFirst && (
        <Link style={{marginLeft:`10px`}} to={prevPage} rel="prev">
          ← Geri
        </Link>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <Link style={{marginLeft:`10px`}} key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
          {i + 1}
        </Link>
      ))}

       {!isLast && (
        <Link style={{marginLeft:`10px`}}  to={nextPage} rel="next">
          ileri →
        </Link>
      )}

      </Layout>


    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`