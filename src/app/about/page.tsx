"use client";

import { Heading, Text, Box } from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Heading
        as="h3"
        size="lg"
        textDecoration="underline"
        textDecorationColor="grey"
        textDecorationThickness="4px"
        mb={1}
      >
        more about me
      </Heading>
      <Text fontFamily="var(--font-inter)">
        I&apos;m Nick, and I come from London, United Kingdom. I&apos;ve been
        coding and programming since 2017, but it wasn&apos;t until 2020 that I
        started to take it seriously. Although I&apos;m still in school, I plan
        to pursue Computer Science at university. I&apos;m a self-taught
        developer who always loves to learn new things. Some languages and
        frameworks I&apos;m familiar with include Python, JavaScript, React, and
        Rust. I find building web applications and solving problems with code
        very enjoyable! I&apos;m also very much into online coding challenges
        and hackathons. I hope this gives you a better idea about me and my
        passion for coding!
      </Text>
    </Box>
  );
}
