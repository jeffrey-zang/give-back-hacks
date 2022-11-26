import {AppContextProvider} from "./AppContext"
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Post from './pages/Post/Post'
import PostSuccess from './pages/Post/PostSuccess'
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
import Success from './pages/Login/Success'

function App() {

  return (
    <>
    <AppContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/postsuccess" element={<PostSuccess/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Success/>}/>
      </Routes>
      </BrowserRouter>
    </AppContextProvider>
    </>
  );
}

export default App;
