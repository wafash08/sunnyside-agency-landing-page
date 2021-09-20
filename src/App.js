import styled from "styled-components";
import {
  Footer,
  Hero,
  MenuDesktop,
  Service,
  Subservice,
  Testimonial,
} from "./components";

function App() {
  return (
    <Layout>
      <MenuDesktop />
      <Hero />
      <Service />
      <Subservice />
      <Testimonial />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div``;

export default App;
