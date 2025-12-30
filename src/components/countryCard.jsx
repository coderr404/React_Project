import styles from "./countryCard.module.css";
function countryCard({name, flag ,population, region, capital}) {
    
  return (
    <a
      className={styles.countryCard}
    //   href={flag}
    >
      <img className = {styles.imgg} src={flag} alt="" />
      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardTextP}>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p className={styles.cardTextP}>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  );
}

export default countryCard;
