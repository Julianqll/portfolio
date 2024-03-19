import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './SimpleHeader.module.css';

const mainLinks = [
  { link: '#', label: 'About' },
  { link: '#', label: 'Skills' },
  { link: '#', label: 'Experience' },
  { link: '#', label: 'Projects' },
];

export function SimpleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));


  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Image
          w={100}
          src='./src/assets/isologo.svg'
        />
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}