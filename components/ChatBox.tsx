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
                {props.children &&
                    <div className="chat-box__children">
                        {props.children}
                    </div>
                }
            </div>
            <style jsx>{`
                .chat-box {
                    display: flex;
                    justify-content: ${props.isPrompt ? 'flex-start' : 'flex-end'};
                    margin-top: 0.5em;
                }

                .chat-box:first-of-type {
                    margin-top: 0;
                }

                .chat-box__content {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border-radius: 1em;
                    background: ${props.isPrompt ? Colors.promptBackground : Colors.responseBackground} 
                }
                .chat-box__children {
                    margin: 1rem 0.5rem;
                }
               `}</style>
        </div>)

export default ChatBox