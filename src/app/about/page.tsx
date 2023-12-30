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
        My name is Nick, and I&apos;m from the city of London in the United
        Kingdom. I originally started coding/programming as early as 2017, but I
        only started taking it seriously in 2020. I&apos;m still in school, and
        I&apos;m hoping to go to university to study Computer Science. I&apos;m
        also a self-taught developer, and I&apos;m always looking to learn new
        things. Some of the languages and frameworks that I&apos;m familiar with
        are Python, JavaScript, React, and Rust. I enjoy building web
        applications and solving problems with code. I also like to participate
        in online coding challenges and hackathons. Hopefully by reading this
        you&apos;ve learnt more about me and my passion for coding!
      </Text>
    </Box>
  );
}
