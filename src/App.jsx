import './App.css'
import Header from "./components/header.jsx"
import Searching from './components/searching.jsx'
import SelectMenu from './components/menu.jsx'
import CountryCard from './components/countryCard.jsx'

 function App() {
  return (
    <>
    <Header></Header>
    <div className="search-filter-container">
        <Searching></Searching>
    <SelectMenu></SelectMenu>  
    </div>
    <CountryCard></CountryCard>

    </>
    
  )
}

export default App