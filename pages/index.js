import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Cards from '../components/Card'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Navbar />
      <Filter />
      <Cards />
      <Footer />
    </div>
  )
}
