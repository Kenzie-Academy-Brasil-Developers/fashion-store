import styles from "./style.module.scss";

export const AppFooter = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.text}>
          Todos os direitos reservados - Fashion Store
        </p>
      </footer>
    </>
  );
};
