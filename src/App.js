import React, { Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Hero, Loading, MenuDesktop } from "./components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

const Service = React.lazy(() => import("./components/Service"));
const Subservice = React.lazy(() => import("./components/SubService"));
const Testimonial = React.lazy(() => import("./components/Testimonial"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <MenuDesktop />
        <Hero />
        <Suspense fallback={<Loading />}>
          <Service />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Subservice />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

const Layout = styled.div``;

export default App;
