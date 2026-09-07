import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Component/Stranger-chat'
import StrangerChat from './Component/Stranger-chat'
import Randomchat from './Component/Random-chat'
import Anonymouschat from './Component/Anonymous-chat'
import Confessions from './Component/Confessions'
import Games from './Component/Games'
import About from './Component/About'
import Report from './Component/Report'
import Safety from './Component/safety'
import Contact from './Component/Contact'
import FAQ from './Component/FAQ'
import PrivacyPolicy from './Component/privacypolicy'
import TermsOfUse from './Component/Termscondition'



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<StrangerChat />} />
      <Route path='/stranger-chat' element={<StrangerChat />}/>
      <Route path='/random-chat' element={<Randomchat />} />
      <Route path='/anonymous-chat' element={<Anonymouschat />} />
      <Route path='/confessions' element={<Confessions />} />
      <Route path='/games' element={<Games standalone />} />
      <Route path='/About' element={<About />} />
      <Route path='/Report' element={<Report />} />
      <Route path='/safety' element={<Safety />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/termscondition' element={<TermsOfUse />} />
    
      </Routes>
      </Router>
      
  )
}

export default App

