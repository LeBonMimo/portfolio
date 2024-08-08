import "./App.scss"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Pres } from "./components/Pres/Pres"


function App() {
  return (
    <div className="App">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <Pres />
    </div>
  )
}

export default App
