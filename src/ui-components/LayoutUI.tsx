import {FC} from "react";
import styled from "styled-components";

import {Outlet} from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Layout: FC = () => {
    return (
        <Section>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Section>
    );
}

export default Layout;

const Section = styled('div')`
  width: 100%;
  display: table;
  min-height: 100vh;

  main {
    height: 100%;
    display: table-row;
  }
`
