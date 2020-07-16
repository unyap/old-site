import Layout from '../components/Layout'
import Slider from '../components/home/Slider'
import Navbar from '../components/Navbar'
import About from '../components/home/About'
import Products from '../components/home/Products'
import Contact from '../components/home/Contact'
import Footer from '../components/Footer'

function HomePage() {
  return(
    <Layout>
      <Slider />
      <main>
        <Navbar />
        <About />
        <Products />
        <Contact />
        <Footer />
      </main>
    </Layout>
  )
}

export default HomePage