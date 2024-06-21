import { Text, Title, Box, Container } from '@mantine/core';

import Hero from '../Components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container component="section" p={'lg'} pt={100}>
        <Text c="black" style={{ textAlign: "center" }}>
          <Title order={1}>The card is just the start</Title>
          <p>
            Everything you need to control spend and optimize finance operations, all on a single platform.
          </p>
        </Text>
      </Container>
    </>
  );
}
