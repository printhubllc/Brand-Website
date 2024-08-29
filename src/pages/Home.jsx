import {
  Navbar,
  Main,
  Product,
  Footer,
  BelowMain,
  Guides,
  SubNavBar,
} from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <Main />
      <BelowMain />
      <Product />
      <Guides />
      <Footer />
    </>
  );
}

export default Home;
