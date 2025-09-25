import './App.css'
import Footer from './components/footer/footer'
import Testimonials from './components/testimonials/testimonials'
import CallToAction from './components/call/call'
import Team from './components/team/team'

function App() {
  return (
    <main className="bg-light min-h-screen">
      <Team />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
