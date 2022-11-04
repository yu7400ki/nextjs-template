import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>
    {children}
    <Footer />
  </div>
);
