import Header from "../../features/header/header";
import Footer from "../footer/footer";

import styles from "./layout.module.css";

function Layout(props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <Header />
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
