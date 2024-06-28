import { Text, Title, Box, Container } from '@mantine/core';
import ChatRoom from '../Components/Chat/ChatRoom';

export default function GeneratePage() {
    return (
        <>
            <Container component="section" p={'lg'} pt={100}>
                <ChatRoom />
            </Container>
        </>
    );
}
