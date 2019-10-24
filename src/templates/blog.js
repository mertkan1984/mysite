import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({data}) {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<div>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query MyQuery($path: String!) {
		markdownRemark( frontmatter: {path: { eq: $path} }) {
			html
			frontmatter{
				date(formatString: "DD-MM-YYYY")
				path
				title
			}
		}
	}
`