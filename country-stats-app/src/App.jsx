import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage } from './Pages/InfoPage'
function App() {
  return (

    <Routes>
      {/* <Route path="Country-Stats/" element={<SearchPage/>}/> */}
      <Route path="Country-Stats/info" element={<InfoPage/>}/>
    </Routes>
    
  )
}

export default App
