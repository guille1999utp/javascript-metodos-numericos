import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const clientNoLogin = sanityClient({
  projectId: 'qp1zqvs4',
  dataset: 'production',
  apiVersion: '2022-11-17', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data,
  token:"skbGI9E2BZOZ28mr9Ik3rymTR4rWoOS4eusRRDUr4w45JoMlqHkRugI0EVL29bRc1wMh55y0q4aifqLU3JS3oLPm6Few3jcUCuz71tW7KAATvbm8OIRkhEZVZoU0MhUPAdcF0BOVZw5pXUKAUlYIl9WEl4A3CIhpsecGk8iHBQywl8jIpZwR"
})

export const clientEditor = sanityClient({
    projectId: 'qp1zqvs4',
    dataset: 'production',
    apiVersion: '2022-11-17', // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data,
    token:"skOoQYt9u3ClcDN9resNbiTfH2hQr2jbHchxFSBgg5B75NGB4y3nMRw3LdLFzMlxPPZ5lreJxwzIXYsPDLXdNC1ZSmSroPt9uNTDyRLq5tiwfj1eRT6mT152XYcN1RNYdQt7s1128dqlcWKSclCrjBTo72DWWdiKre9m1bUjLx7iY4fG90On"
  })

const builder = imageUrlBuilder(clientNoLogin);

export function urlFor(source) {
    return builder.image(source)
  }


