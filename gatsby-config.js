module.exports = {
  siteMetadata: {
    title: 'Historias de vida fronteira',
    author: 'Yulliam Moncada',
    description: 'Historias de vida na fronteira',
    image: 'src/assets/img/yo.jpg',
    siteUrl: 'https://narrativasdefronteira.com.br/',
    instagramUsername: '@yulliamm',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Historias de vida na fronteira',
        short_name: 'Historias de vida na fronteira',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/yo.jpg',
      },
    },
    'gatsby-plugin-sass'
  ],
}
