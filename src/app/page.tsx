"use client";

import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoDiscord, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { SiVisualstudiocode, SiDatagrip } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import NextLink from "next/link";

export default function Home() {
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
        hi there! 👋
      </Heading>
      <Text fontFamily="var(--font-inter)">
        My name is Nick, but I go online by Iaqi. I specialize in backend
        development for Discord Bots and APIs. I&apos;m also familiarizing
        myself with web development, as you can see from my portfolio. I excel
        in working with databases and have experience with multiple programming
        languages, including TypeScript, JavaScript, Python, and Rust.
        Additionally, I am proficient in using frameworks such as React,
        Next.js, Express, Fastify, Prisma, and more.
      </Text>
      <Heading
        as="h3"
        size="lg"
        textDecoration="underline"
        textDecorationColor="grey"
        textDecorationThickness="4px"
        mb={1}
        mt={8}
      >
        what i&apos;m working on
      </Heading>
      <Box fontFamily="var(--font-inter)">
        <Text mb={1}>You can either check out my Github or my work page:</Text>
        <Button
          as={Link}
          variant="ghost"
          href="https://github.com/nicklvh"
          leftIcon={<IoLogoGithub />}
        >
          @nicklvh
        </Button>
        <br />
        <Button
          variant="ghost"
          as={NextLink}
          href="/work"
          leftIcon={<ChevronRightIcon />}
        >
          /work
        </Button>
      </Box>
      <Heading
        as="h3"
        size="lg"
        textDecoration="underline"
        textDecorationColor="grey"
        textDecorationThickness="4px"
        mb={1}
        mt={8}
      >
        what i use
      </Heading>
      <Box fontFamily="var(--font-inter)">
        <Text mb={1}>You can check out my full setup on PCPP:</Text>
        <Button
          as={Link}
          variant="ghost"
          href="https://uk.pcpartpicker.com/list/zXzpL9"
          leftIcon={<FaComputer />}
        >
          PCPP List
        </Button>
        <br />
        <Text mb={1}>For my software usage, I use the following: </Text>
        <Button
          variant="ghost"
          as={Link}
          href="https://code.visualstudio.com/"
          leftIcon={<SiVisualstudiocode />}
        >
          Code Editor
        </Button>
        <Button
          variant="ghost"
          as={Link}
          href="https://www.jetbrains.com/datagrip/"
          leftIcon={<SiDatagrip />}
        >
          DataGrip
        </Button>
      </Box>
      <Heading
        as="h3"
        size="lg"
        textDecoration="underline"
        textDecorationColor="grey"
        textDecorationThickness="4px"
        mb={1}
        mt={8}
      >
        contact me
      </Heading>
      <Box fontFamily="var(--font-inter)">
        <Text mb={1}>I&apos;m active on Discord. You can also email me!</Text>
        <Button
          as={Link}
          colorScheme="purple"
          href="https://discord.com/channels/@me/776190552454070314"
          leftIcon={<IoLogoDiscord />}
        >
          @iaqi
        </Button>
        <Button
          as={Link}
          variant="ghost"
          href="mailto:"
          leftIcon={<EmailIcon />}
          ml={1}
        >
          Email Me
        </Button>
      </Box>
    </Box>
  );
}
