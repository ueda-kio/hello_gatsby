import React from "react"
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => {
    return (
        <div>
            <h2>{data.site.siteMetadata.title}</h2>
        </div>
    )
}

export const query = graphql`
    query {
        site {
        siteMetadata {
            title
        }
    }
}
`

export default AboutPage