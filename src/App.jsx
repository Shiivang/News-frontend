// import  axios  from 'axios'
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Hero from "./components/page1/Hero"
import Page2 from "./components/page2/Page2"
import Page3 from "./components/page3/Page3"

const App = () => { 
  return (
    <>

    <Nav  />
    <div id="home" > <Hero  /> </div>
    <div id="news" ><Page2  /></div>
    <div id="headline" ><Page3  /></div>
     <Footer />
    </>
  )
}

export default App