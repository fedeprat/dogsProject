import styles from "./Filtros.module.css";

const Filtros = ({children}) => {
 
  return (
    <div className={styles.container} >
      <p className={styles.p} >FILTER:</p>
      {children}
    </div>
  );
};

export default Filtros;
