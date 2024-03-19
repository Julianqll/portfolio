import { Container, Title, Text, Button, Image, Flex } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="xl">
        <Flex
          mih={50}
          gap="xl"
          justify={{base:"center", md: 'space-between'}}
          align="center"
          direction="row"
          wrap="wrap-reverse"
        >
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'julian-third-blue.4', to: '#D0E6FF' }}
              >
                Julian Marcelo Quispe Lau Len
              </Text>
            </Title>

            <Text className={classes.description} mt={30} size='xl'>
              Passionate self-taught junior developer exploring all realms
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Who am I?
            </Button>
          </div>
          <Image
            radius={200}
            w={{base:200, md: 300}}
            src="./src/assets/julianphoto.jpeg"
          />
        </Flex>
      </Container>
    </div>
  );
}