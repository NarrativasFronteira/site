module.exports = {
  siteMetadata: {
    title: 'HISTÓRIAS DE VIDA NA FRONTEIRA',
    author: 'HISTÓRIAS DE VIDA NA FRONTEIRA',
    description: 'HISTÓRIAS DE VIDA NA FRONTEIRA',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HISTÓRIAS DE VIDA NA FRONTEIRA',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sass',
  ],
}
