import './App.css'
import Header from "./components/header.jsx"
import Searching from './components/searching.jsx'
import SelectMenu from './components/menu.jsx'
import CountryCard from './components/countryCard.jsx'
import CountryContainer from './components/countryContainer.jsx'
import { useState } from "react";



 function App() {
  let [query, setQuery] = useState('')
  return (
    <>
    <Header></Header>
    <div className="search-filter-container">
        <Searching setQuery = {setQuery}></Searching>
    <SelectMenu></SelectMenu>  
    </div>
    
    <CountryContainer query = {query}></CountryContainer>
    </>
    
  )
}

export default App