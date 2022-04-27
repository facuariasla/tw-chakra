import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Icon,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import {
  BsTwitter,
  BsHouseFill,
  BsHouse,
  BsHash,
  BsFillBellFill,
  BsBell,
  BsEnvelopeFill,
  BsEnvelope,
  BsFillBookmarkFill,
  BsBookmark,
  BsCardText,
  BsFillPersonFill,
  BsPerson,
  BsThreeDots,
} from "react-icons/bs";

const LINKS = [
  {
    href: "/",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notifications",
    text: "Notificaciones",
    activeIcon: BsFillBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Guardados",
    activeIcon: BsFillBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Listas",
    activeIcon: BsCardText,
    inactiveIcon: BsCardText,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: BsFillPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/options",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

export const Layout = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
  const logoColor = useColorModeValue("primary.500", undefined);
  const userColor = useColorModeValue(undefined, 'white')

  return (
    <Container
      height="100%"
      alignSelf="center"
      maxWidth="container.md"
      paddingX={0}
    >
      <Stack direction="row" height="100%">
        <Stack justifyContent='space-between'>
          <Stack
            minWidth={72}
            borderRightColor="gray.700"
            paddingRight={12}
            paddingLeft={4}
            paddingY={4}
            direction="column"
            spacing={6}
            borderRightWidth={1}
          >
            <NavLink to="/">
              <Icon
                as={BsTwitter}
                color={logoColor}
                height={7}
                width={7}
                onClick={toggleColorMode}
              ></Icon>
            </NavLink>

            <Stack spacing={6}>
              {LINKS.map((link, index) => (
                <NavLink key={index} to={link.href}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={6}
                    color={pathname === link.href ? "primary.500" : "inherit"}
                  >
                    <Icon
                      as={
                        pathname === link.href
                          ? link.activeIcon
                          : link.inactiveIcon
                      }
                      height={6}
                      width={6}
                    ></Icon>
                    <Text fontWeight="medium" fontSize="xl">
                      {link.text}
                    </Text>
                  </Stack>
                </NavLink>
              ))}
            </Stack>

            <Button size="lg" colorScheme="primary" width="100%">
              Twittear
            </Button>
          </Stack>

          <Stack direction='row' justifyContent='space-between' alignItems='center' padding={5}>
            <Stack direction='row' alignItems='center'>
              <Image borderRadius='50%' height={10} width={10} src='https://pbs.twimg.com/profile_images/842592395434885120/hNxmopuq_400x400.jpg'/>
              <Stack spacing={0}>
                <Text fontWeight='bold' color={userColor}>FacundoA</Text>
                <Text fontSize='sm' color='gray.500'>@facuariasl</Text>
              </Stack>
            </Stack>
            <Icon as={BsThreeDots}></Icon>
          </Stack>

        </Stack>

        <Box paddingX={4} paddingY={4} width='100%'>{children}</Box>
      </Stack>
    </Container>
  );
};
