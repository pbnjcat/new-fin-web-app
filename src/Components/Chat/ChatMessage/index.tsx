import { useEffect, useState } from "react";

export default function ChatMessage(props: any) {
    const [msgDate, setMsgDate] = useState<string>("");
    const { text, id } = props.message;

    return (
        <div>
            <p>This is a chat message bubble</p>
        </div>
    )
}