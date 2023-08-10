import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Quote from './components/quote'




function App() {

  const [quote, setQuote] = useState("");

  async function getQuote() {
    const response = await fetch('https://api.quotable.io/quotes/random');
    const data = await response.json();
    setQuote(data[0]);
  }

  useEffect(() => {

    getQuote();
  }, [])



  return (
    <div className='app'>
      <Header />
      <Quote text={quote.content} autor={quote.author} onNewQuote={getQuote} />
      <Footer />
    </div>
  )
}

export default App
