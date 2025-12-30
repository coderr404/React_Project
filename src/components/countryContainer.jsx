import countriesData from '../../../countriesData.js'
import CountryCard from './countryCard.jsx'
import styles from './countryContainer.module.css'
 function countryContainer() {
   
    let cards = countriesData.map((country)=>{
    
    return <CountryCard name={country.name.common} flag = {country.flags.svg} population = {country.population} region = {country.region} capital = {country.capital}/>
})

  return (


    <>
    <div className={styles.countryContainer}>
      {cards}
      {/* <CountryCard/> */}
     
    </div>
    </>
     
    
  )
}

export default countryContainer