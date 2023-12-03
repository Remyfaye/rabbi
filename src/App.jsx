
import { Route, Routes } from 'react-router-dom'
// import './index.css'
import Home from './pages/Home'
import Explore from './pages/Explore'
import VideoPage from './components/VideoPage'
import LargeDisplay from './pages/LargeDisplay'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import SignUp from './pages/SignUp'
import ArticlePage from './pages/ArticlePage'
import AllArticles from './pages/AllArticles'
import Tutors from './pages/Tutors'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/resources' element={<Explore/>}/>
      <Route path='/videoPage/:vidUrl' element={<VideoPage/>}/>
      <Route path='/largedisplay/:linkParam' element={<LargeDisplay/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/message/:userId' element={<Messages/>}/>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/articles/:artId' element={<ArticlePage/>}/>
      <Route path='/allarticles' element={<AllArticles/>}/>
      <Route path='/tutors' element={<Tutors/>}/>
    </Routes>
  )
}

export default App
