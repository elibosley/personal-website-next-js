import Colors from "../styles/colors";
import { PropsWithChildren } from "react";

interface ChatBoxProps {
    key?: string;
    text: string;
    isPrompt: boolean;

}

const ChatBox: React.FC<PropsWithChildren<ChatBoxProps>> = (props) =>
    (
        <div className="chat-box">

            <div className="chat-box__content">
                <p>{props.text.toString()}</p>
                {props.children}

            </div>
            <style jsx>{`
                .chat-box {
                    display: flex;
                    justify-content: ${props.isPrompt? 'flex-start': 'flex-end'};
                }

                .chat-box__content {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border-radius: 1em;
                    background: ${props.isPrompt? Colors.promptBackground: Colors.responseBackground} 
                }
               `}</style>
        </div>)

export default ChatBox