"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoDiscord, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
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
        My name is Nick, although I also go by the name Iaqi online. I am a
        backend developer and I specialise in Discord Bots and APIs. I&apos;m
        also trying to familiarise myself in web development{" "}
        <em>(as you can see by me making this portfolio)</em>. I work well with
        databases and I am familiar with many languages such as TypeScript,
        JavaScript, Python, and Rust. I also know how to use many frameworks
        such as React, Next.js, Express, Fastify, Prisma, and more.
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
          href="https://uk.pcpartpicker.com/list/qpxDn6"
          leftIcon={<ChevronRightIcon />}
        >
          PCPP List
        </Button>
        <br />
        <Text mb={1}>
          For my software usage, I use the following:
          <br />
          <ChevronRightIcon /> Browser:{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.300")}
            href="https://www.mozilla.org/en-GB/firefox/new/"
          >
            Mozilla Firefox
          </Link>
          <br />
          <ChevronRightIcon /> Music App:{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.300")}
            href="https://cider.sh/"
          >
            Cider
          </Link>
          <br />
          <ChevronRightIcon /> Email Client:{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.300")}
            href="https://www.thunderbird.net"
          >
            Thunderbird
          </Link>
          <br />
          <ChevronRightIcon /> Main IDE:{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.300")}
            href="https://code.visualstudio.com/"
          >
            Visual Studio Code
          </Link>
          <br />
          <ChevronRightIcon /> Database IDE:{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.300")}
            href="https://www.jetbrains.com/datagrip/"
          >
            JetBrains DataGrip
          </Link>{" "}
        </Text>
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
        <Text mb={1}>
          I&apos;m active on Discord, but you can also contact me on Twitter.
          <br />
          <br />
          You can contact me, for mostly anything on any of the following:
        </Text>
        <Button
          as={Link}
          colorScheme="twitter"
          href="https://twitter.com/iaqidev"
          leftIcon={<IoLogoTwitter />}
        >
          @iaqidev
        </Button>
        <br />
        <Button
          as={Link}
          colorScheme="purple"
          href="https://discord.com/channels/@me/776190552454070314"
          leftIcon={<IoLogoDiscord />}
          mt={1}
        >
          @iaqi
        </Button>
      </Box>
    </Box>
  );
}
