import { GlobalStyles } from '../components/globalStyles/Global.styles'
import Navbar from '../components/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const AppRouter = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <GlobalStyles/>
   <Routes>

    <Route   />

   </Routes>
   </BrowserRouter>
  )
}

export default AppRouter
