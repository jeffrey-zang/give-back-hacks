import {AppContextProvider} from "./AppContext"
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Post from './pages/Post/Post'
import Search from './pages/Search/Search'

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;