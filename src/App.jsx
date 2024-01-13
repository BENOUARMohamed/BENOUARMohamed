import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'



function App() {
  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowscrollBTN(true)
      } else {
        setshowscrollBTN(false)
      }

    })
  }, []);
  const [showscrollBTN, setshowscrollBTN] = useState(false);
  return (
    <div id="up" className='container'>
      <Header />
      <Hero />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />
      <a style={{ opacity: showscrollBTN ? 1 : 0, transition: "0.7s" }} href="#up">
        <button className='icon-keyboard_arrow_up scoll2Top'></button>
      </a>

    </div>

  );
}

export default App
