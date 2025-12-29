import styles from "./header.module.css";


function header() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.logo}>Where is my country</h2>

        <div className="darkTheme">
          <span className={styles.darkText}>Dark Mode</span>
        </div>
      </header>
    </>
  );
}
export default header;
