import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Header from './components/header'
import Link from 'next/link'
 
export default function Home() {
  return (
  <div className='w-100'>

   <Header></Header>
   <div className=''>
   <div className='Main-container mt-8'>
        <h1> Next Js POC </h1>
        <p>Welcome to the Next.js POC! </p>
        <nav>
          <ul className='topics-list'>
            {/* <Link href="/"  >
              Home
            </Link> */}
            <Link href="/users">
              <span className='span40Info'>CSR - Client Side Rendering</span> 
              <span className='span60Info'>Normal React Single Page Application(SPA), table data will be shown after some delay</span>
            </Link>
            <Link href="/server/users">
            <span className='span40Info'>Server Side Rendering </span> 
            <span className='span60Info'>Entire Page will display with some delay as at run time page is generated on server side </span>
            </Link>
            <Link href="/static/users">
            <span className='span40Info'>Static Generation</span> 
            <span className='span60Info'>Build time page generation, so will display page very fast </span>
            </Link>
            <Link href="/products"  >
            <span className='span40Info'>Incremental Static Regeneration (ISR) </span>
            <span className='span60Info'>After every 10 seconds(configurable) cached data will refresh </span>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
   <Footer></Footer>
 
  
   </div> )
}
