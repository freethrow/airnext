import '@/styles/globals.css'

import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
  <div className="min-h-screen border border-gray-400 text-gray-600">
    <Navbar />
    <Component {...pageProps} />
  </div>
  )  
}
