import {
  Avatar,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const toggleColorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Container
      maxW="container.lg"
      px={4}
      // sx={{
      //   position: "-webkit-sticky",
      //   position: "sticky" /* Safari */,
      //   top: "0",
      //   zIndex: "99",
      // }}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="auto"
        py={5}
        px={3}
      >
        <Image src="/logo.svg" width="100px" height="100px" alt="logo" />

        <HStack>
          <Tooltip label={'Login to constribute more'}>
            <IconButton
              icon={<CgProfile size={20} />}
              variant="ghost"
              aria-label="Profile"
            />
          </Tooltip>

          <IconButton
            ml={1}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
            icon={toggleColorModeIcon}
          />
        </HStack>

        {/* LARGE SCREEN */}
        {/* <HStack as="nav" spacing="4" display={{ base: "none", lg: "flex" }}>

        </HStack> */}

        {/* BASE SCREEN */}
        {/* <HStack display={{ base: "inherit", lg: "none" }} spacing={3}>

          <IconButton
            size={"md"}
            colorScheme={"blackAlpha"}
            icon={
              isOpen ? (
                <CloseIcon color={"gray.500"} />
              ) : (
                <HamburgerIcon color={"gray.500"} />
              )
            }
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
          />
        </HStack> */}
      </Flex>
    </Container>
  );
};

export default Navbar;
