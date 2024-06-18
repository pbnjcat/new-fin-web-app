import {
  Button,
  Title,
  Group,
  Image,
  Box,
  Text,
  HoverCard,
  UnstyledButton,
} from '@mantine/core';
import classes from './Header.module.scss';
import Logo from '../../assets/finance-logo.png';
import { Link } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';

export default function Header() {
  return (
    <>
      <Box>
        <header className={classes.header}>
          <Link to='/'>
            <UnstyledButton component='a' className={classes.brand}>
              <Group gap={10}>
                <Image alt='header' src={Logo} h={48} w={48} />
                <Title order={5} className={classes.title}>
                  Buy the News
                </Title>
              </Group>
            </UnstyledButton>
          </Link>
          <Group h='100%' gap={0} visibleFrom='sm'>
            <Link to='/' className={classes.link}>
              About the Team
            </Link>
            <Link to='/' className={classes.link}>
              Customers
            </Link>
            <HoverCard width={280} shadow='md'>
              <HoverCard.Target>
                <UnstyledButton className={classes.link} p={2}>
                  <Text c={'white'}>Resources</Text>
                  <Box mt={10} ms={3}>
                    <IconChevronDown color='white' />
                  </Box>
                </UnstyledButton>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size='sm'>
                  Hover card is revealed when user hovers over target element,
                  it will be hidden once mouse is not over both target and
                  dropdown elements
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to='/' className={classes.link}>
              Pricing
            </Link>
          </Group>
          <Group>
            <Button variant='outline' color='white'>
              Sign In
            </Button>
            <Button variant='filled' color='#ECE3CE'>
              <Text c={"black"}>See a demo</Text>
            </Button>
          </Group>
        </header>
      </Box>
    </>
  );
}
