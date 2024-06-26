import { ActionIcon, Group, Stack, TextInput } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useState } from "react";
import { IconSend } from "@tabler/icons-react";

import classes from './ChatBox.module.scss';

export default function ChatBox() {
    const [value, setValue] = useState("");

    const sendMessage = async () => {
        console.log(value);
    }

    return (
        <>
            <Stack justify="center" p={0}>
                
                <Group p="xs" className={classes.user_input}>
                    <TextInput
                        value={value}
                        onChange={(event) => setValue(event.currentTarget.value)}
                        onKeyDown={
                            !/\S/.test(value)
                                ? undefined
                                : value.length < 2
                                    ? undefined
                                    : getHotkeyHandler([["Enter", sendMessage]])
                        }
                    />
                    <ActionIcon
                        onClick={() => sendMessage}
                        variant="hover"
                        size="lg"
                        disabled={
                            !/\S/.test(value) ? true : value.length < 2 ? true : false
                        }
                    >
                        <IconSend />
                    </ActionIcon>
                </Group>
            </Stack>
        </>
    )
}