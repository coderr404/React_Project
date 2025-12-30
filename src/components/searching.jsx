import styles from "./searching.module.css";

function searching({setQuery}) {
  return (
    <>
      <div className={styles.searchContainer}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className = {styles.searchInput}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}

export default searching;
