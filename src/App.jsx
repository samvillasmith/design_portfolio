import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import MobileContactButton from './components/MobileContactButton/MobileContactButton'

const App = () => {
  return (
    <div className='container'>
      <section id = "home">
        <Hero />
      </section>
      <section id = "services">
        <Services />
      </section>
      <section id = "portfolio">
        <Portfolio />
      </section>
      <section id = "contact">
        <Contact />
      </section>
      <MobileContactButton />
    </div>
  )
}

export default App