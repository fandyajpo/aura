import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  console.log(process.env.TEST)
  
  return <Component {...pageProps} />
}

export default MyApp
