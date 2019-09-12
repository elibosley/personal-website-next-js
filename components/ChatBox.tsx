import Colors from "../styles/colors";
import { PropsWithChildren } from "react";

interface ChatBoxProps {
    key?: string;
    text: string;
    isPrompt: boolean;
    
}

const ChatBox: React.FC<PropsWithChildren<ChatBoxProps>> = (props) =>
    (<div className={props.isPrompt ? "chat-box prompt" : "chat-box user-response"}>
        <p>{props.text.toString()}</p>
        {props.children}
        <style jsx>{`
        .chat-box {
            display: flex;
            padding: 0.5rem 1rem;
            border-radius: 1em;
        }
        p {
        }
        .prompt {
            background: ${Colors.promptBackground}            
        }
        .user-response {
            justify-content: flex-end;
            background: ${Colors.responseBackground}
        }
        .user-response p {
            
        }
    `}</style>
    </div>)

export default ChatBox