import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import Blog from './Component/Blog'
import KeywordBlog from './Component/KeywordBlog'



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
      <Route path='/blog' element={<Blog />} />
      <Route path='/free-stranger-chat' element={<KeywordBlog slug="free-stranger-chat" />} />
      <Route path='/blog/free-stranger-chat-without-registration' element={<KeywordBlog slug="free-stranger-chat" />} />
      <Route path='/anonymous-text-chat' element={<KeywordBlog slug="anonymous-text-chat" />} />
      <Route path='/chat-with-strangers-online' element={<KeywordBlog slug="chat-with-strangers-online" />} />
      <Route path='/random-text-chat' element={<KeywordBlog slug="random-text-chat" />} />
      <Route path='/safe-stranger-chat' element={<KeywordBlog slug="safe-stranger-chat" />} />
      <Route path='/omegle-alternative' element={<KeywordBlog slug="omegle-alternative" />} />
      <Route path='/online-chat-no-signup' element={<KeywordBlog slug="online-chat-no-signup" />} />
      <Route path='/meet-strangers-anonymously' element={<KeywordBlog slug="meet-strangers-anonymously" />} />
      <Route path='/anonymous-chat-room' element={<KeywordBlog slug="anonymous-chat-room" />} />
      <Route path='/random-chat-room' element={<KeywordBlog slug="random-chat-room" />} />
    
      </Routes>
      </Router>
      
  )
}

export default App

