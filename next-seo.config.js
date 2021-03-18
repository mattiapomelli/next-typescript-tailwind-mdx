const title = 'My Awesome Website'
const description = 'This is my awesome website'

const SEO = {
  title,
  description,
  canonical: 'http:localhost:3000',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'http:localhost:3000',
    title,
    description,
  },
}

export default SEO
