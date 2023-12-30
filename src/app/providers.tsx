"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { theme } from "@/lib/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Container pt={20}>{children}</Container>
      <Footer />
    </ChakraProvider>
  );
}
