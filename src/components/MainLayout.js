import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Container maxW={"container.lg"}>
        <Navbar />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
