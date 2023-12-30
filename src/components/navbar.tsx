import {
  Box,
  Container,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  forwardRef,
  Link,
  LinkProps,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuLink = forwardRef((props: LinkProps, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

export default function NavBar() {
  return (
    <Box
      position="fixed"
      w="100%"
      fontFamily={`var(--font-roboto-mono)`}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Container display="flex" p={4} maxW="container.md" alignContent="center">
        <Flex align="center" mr={5}>
          <Image
            src="/pfp.png"
            alt="iaqi's profile picture"
            width={10}
            height={10}
            borderRadius="full"
            mr={3.5}
          />
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Text fontSize="2xl" align="left" fontWeight="bold">
              iaqi
            </Text>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Box ml="auto" mr={3}>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
              mr={2}
            >
              <BreadcrumbItem>
                <MenuLink href="/">/home</MenuLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <MenuLink href="/about">/about</MenuLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <MenuLink href="/work">/work</MenuLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Stack>

        <Box marginLeft="auto">
          <ThemeSwitcher />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Hamburger Menu"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  /home
                </MenuItem>
                <MenuItem as={MenuLink} href="/about">
                  /about
                </MenuItem>
                <MenuItem as={MenuLink} href="/work">
                  /work
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
