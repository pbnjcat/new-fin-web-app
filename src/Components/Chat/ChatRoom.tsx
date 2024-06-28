import { Group, Stack, Paper, Container, Box, Text } from "@mantine/core";
import { useState } from "react";
import ChatBox from "./ChatBox";
import ChatMessage from "./ChatMessage";


export default function ChatRoom() {
    const [mes, setMes] = useState<any[]>([]);

    return (
        <>
            <Container display={"flex"} h={"85vh"} w={"100vw"} style={{ flexDirection: "column", justifyContent: "space-between", }}>
                <Stack justify="center" p={0}>
                    <Group>
                        <Paper>
                            <Text>Hello</Text>
                            <Text>Hello</Text>
                            <Text>Hello</Text>
                            <Text>Hello</Text>
                            <Text>Hello</Text>
                            <Text>Hello</Text>
                        </Paper>
                    </Group>
                </Stack>
                <Box>
                    <ChatBox />
                </Box>
            </Container>
        </>
    )
}