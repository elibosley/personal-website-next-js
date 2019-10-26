import { Component, useState } from "react";
import websiteModel from '../model/WebsiteModel'
import DialogHelper from "../model/DialogHelper";
import ChatBox from "./ChatBox";
import Prompt from "../model/Prompt";
import UserResponse from "../model/UserResponse";
import { useTransition, animated } from 'react-spring'
import { Responses } from "./Responses";
const Messages: React.FC = () => {
    const [current, setCurrent] = useState(websiteModel.startPrompt)
    const [index, setIndex] = useState(0);
    const [pastConversation, setPastConversation] = useState([] as Array<Prompt | UserResponse>)
    const choose = (next: UserResponse): void => {
        console.log(`Choosing ${next.text.toString()}`)
        let nextPrompt = next.nextPrompt ? next.nextPrompt : websiteModel.notImplementedResponse;
        setCurrent(nextPrompt);
        current.key = index;
        next.key = index + 1;
        setIndex(index + 2);
        setPastConversation([...pastConversation, current, next])
    }

    const transitions = useTransition(pastConversation, conversationItem => conversationItem.text, {
        initial: { transform: 'translate3d(0%, 0%,0)' },
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <div className="message-list">
            {transitions.map(({ item, props, key }, index) => {
                <animated.div key={key} style={props}>
                    <ChatBox
                        text={item.text}
                        isPrompt={DialogHelper.isPrompt(item)} >
                        {(DialogHelper.isPrompt(item) && item.content)}
                    </ChatBox>
                </animated.div>
            })}
            <ChatBox text={current.text} isPrompt={DialogHelper.isPrompt(current)} >
                {(DialogHelper.isPrompt(current) && current.content)}
            </ChatBox>

            {DialogHelper.isPrompt(current) && (
                <Responses responses={current.responses} chooseHandler={choose} />
            )}
        </div>
    )
}


export default Messages