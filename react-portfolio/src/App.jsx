import "./App.scss"
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
    </div>
  )
}

export default App
