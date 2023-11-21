import styles from "./page.module.css";

import MainLayout from "./../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>Welcome to Blog by REDSOLS</p>
      </div>
    </MainLayout>
  );
}
