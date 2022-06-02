import Footer from "components/layout/Footer";
import SetHead from "components/Head";

const About = () => {
  return (
    <>
      <SetHead title="About" content="All about next.js" />
      <h1 className="content">About</h1>
    </>
  );
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
