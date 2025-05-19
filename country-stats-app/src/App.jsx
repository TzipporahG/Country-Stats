import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage } from './Pages/InfoPage'
import { SearchPage } from './Pages/SearchPage'
import { AboutUs } from './Pages/AboutUs'

function App() {
  return (

    <Routes>
      <Route path="Country-Stats/" element={<SearchPage/>}/>
      <Route path="/info" element={<InfoPage/>}/>
      <Route path="Country-Stats/info" element={<InfoPage/>}/>
      <Route path="Country-Stats/about-us" element={<AboutUs/>}/>
    </Routes>
    
  )
}

export default App
