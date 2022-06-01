import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

const About = () => {
  return <h1 className={styles.content}>About</h1>;
};

export default About;

//* It is used when we don't need to use any layout in the component.
//* In the page, We don't need to show header layout.
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
