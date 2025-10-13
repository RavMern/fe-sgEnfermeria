import './App.css'
import Footer from './components/footer/footer'
import Testimonials from './components/testimonials/testimonials'
import CallToAction from './components/call/call'
import Team from './components/team/team'
import Hero from './components/hero/hero'
import Servicios from './components/care/care'
function App() {
  return (
    <main className="bg-light min-h-screen">
      <Hero />
      <Servicios/>
      <Team />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
