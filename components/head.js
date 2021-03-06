import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <meta property="fb:app_id" content={props.appID || defaultOGURL} />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:type" content={props.type || "article"} />
    <meta property="og:title" content={props.ogTitle || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  ogTitle: string,
  appID: string,
  type: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head