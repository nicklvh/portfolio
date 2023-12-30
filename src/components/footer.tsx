import { Box, Button, Link, Text } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <Box textAlign="center" color="grey" mt={10} mb={3}>
      <Text>
        &copy; {new Date().getFullYear()} Made with 💖 by Iaqi
        <br />
        Check out the source code here:{" "}
        <Button
          leftIcon={<IoLogoGithub />}
          as={Link}
          href="https://github.com/nicklvh/portfolio"
          variant="link"
        >
          Github Repo
        </Button>
      </Text>
    </Box>
  );
}
