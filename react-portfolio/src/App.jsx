import "./App.scss"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"


function App() {
  return (
    <div className="App">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
