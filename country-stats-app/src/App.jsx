import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage } from './Pages/InfoPage'
import { SearchPage } from './Pages/SearchPage'
function App() {
  return (

    <Routes>
      <Route path="Country-Stats/" element={<SearchPage/>}/>
      <Route path="/info" element={<InfoPage/>}/>
    </Routes>
    
  )
}

export default App
