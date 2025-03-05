import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import '../assets/sass/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            instagramUsername
            image
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'image', content: data.site.siteMetadata.image },
            { name: 'og:site_name', content: data.site.siteMetadata.title},
            { name: 'og:url', content: data.site.siteMetadata.siteUrl},
            { name: 'og:description', content: data.site.siteMetadata.description},
            { name: 'og:image', content: data.site.siteMetadata.image},
          ]}
        >
          <html lang="pt-br" />
          <link rel="icon" href="../assets/img/yo.jpg" />
        </Helmet>
        <div id="wrapper">{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
