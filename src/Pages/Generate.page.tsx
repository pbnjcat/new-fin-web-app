import { Text, Title, Box, Container } from '@mantine/core';
import ChatBox from '../Components/ChatBox.tsx';

export default function GeneratePage() {
    return (
        <>
            <Container component="section" p={'lg'} pt={100}>
                <ChatBox />
            </Container>
        </>
    );
}
