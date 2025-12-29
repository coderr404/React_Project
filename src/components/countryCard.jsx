 import styles from './countryCard.module.css'
 function countryCard() {
  return (
     <a className={styles.countryCard} href={`/country.html?name=${name.common}`}>
      <img src='https://flagcdn.com/bb.svg' alt='' />
      <div className="card-text">
        <h3 className="card-title">indigo</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  )
}

export default countryCard