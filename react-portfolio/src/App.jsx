import "./App.scss"
import { Contact } from "./components/Contact/Contact"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Pres } from "./components/Pres/Pres"
import { Projects } from "./components/Projects/Projects"


function App() {
  return (
    <div className="App">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <Pres />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
