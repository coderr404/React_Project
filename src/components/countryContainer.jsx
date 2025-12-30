import countriesData from "../../../countriesData.js";
import CountryCard from "./countryCard.jsx";
import styles from "./countryContainer.module.css";
import { useState } from "react";



function countryContainer({query}) {

   

  let cards = countriesData.filter((country) => 
    country.name.common.toLowerCase().includes(query)).map((country) => {
    
    return (
        
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.capital}
        key={country.name.common}
      />
    );
  });

  return (
    <>
           

      <div className={styles.countryContainer}>
        {cards}
      </div>
    </>
  );
}

export default countryContainer;
