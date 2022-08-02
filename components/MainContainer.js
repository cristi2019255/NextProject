import Head from "next/head";
import A from "../components/A";
import styles from "../styles/MainContainer.module.scss";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Cristian Grosu nextjs" + keywords}></meta>
        <title>Next website</title>
      </Head>

      <nav className={styles.navbar}>
        <A href={"/"} text="Main" />
        <A href={"/users"} text="Users" />
      </nav>

      <div>{children}</div>
    </>
  );
};
export default MainContainer;
