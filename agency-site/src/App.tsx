import {
  Banner,
  Bottom,
  Commitments,
  Footer,
  Hero,
  Navbar,
  OurWork,
  Partners,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Commitments />
      <OurWork />
      <Banner />
      <Bottom />
      <Footer />
    </>
  );
};

export default App;
