import {Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home/Home'
import Favourite from './pages/favourites/Favourite'
import Detail from './pages/details/Detail'

function App() {
  

  return (
    <>
      <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourite/> }/>
        <Route path='/recipe-item/:id' element={<Detail/> }/>
       </Routes>
      </div>
    </>
  )
}

export default App
