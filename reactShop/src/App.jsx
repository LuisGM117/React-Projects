import './App.css'
import AboutCard from './components/About/AboutCard'
import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'
function App() {


  return (
    <div className='app'>
      <Header />
      <AboutCard />
      <Meals />
    </div>
  )
}

export default App
