import {
  Button,
  Title,
  Group,
  Image,
  Box,
  Text,
  HoverCard,
} from "@mantine/core";
import classes from "./Header.module.scss";
import Logo from "../../assets/finance-logo.png";
import { Link } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";

export default function Header() {
  return (
    <>
      <Box>
        <header className={classes.header}>
          <Link to="/">
            <Box className={classes.brand}>
              <Group gap={10}>
                <Image alt="header" src={Logo} h={55} w={55} />
                <Title order={2} className={classes.title}>
                  Buy the News
                </Title>
              </Group>
            </Box>
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              About the Team
            </Link>
            <Link to="/" className={classes.link}>
              Customers
            </Link>
            <HoverCard width={600} radius="md" position="bottom" shadow="md">
              <HoverCard.Target>
                <Box component="a" className={classes.link}>
                  <Text>Resources</Text>
                  <IconChevronDown />
                </Box>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Group justify="space-between" px="md"></Group>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/" className={classes.link}>
              Pricing
            </Link>
          </Group>
          <Group>
            <Button variant="outline" color="white">
              Sign In
            </Button>
            <Button variant="filled" color="#ECE3CE">
              <Text c={"black"}>See a demo</Text>
            </Button>
          </Group>
        </header>
      </Box>
    </>
  );
}
