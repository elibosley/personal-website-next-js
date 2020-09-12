import { Component, useState, useEffect, useCallback } from "react";
import websiteModel from '../model/WebsiteModel'
import DialogHelper from "../model/DialogHelper";
import ChatBox from "./ChatBox";
import Prompt from "../model/Prompt";
import UserResponse from "../model/UserResponse";
import { Responses } from "./Responses";
const Messages: React.FC = () => {

    const [current, setCurrent] = useState(websiteModel.startPrompt)
    const [index, setIndex] = useState(0);
    const [pastConversation, setPastConversation] = useState([] as Array<Prompt | UserResponse>)

    const chooseNext = useCallback((next: UserResponse): void => {
        let nextPrompt = next.nextPrompt ? next.nextPrompt : websiteModel.notImplementedResponse;
        setCurrent(nextPrompt);
        current.key = index;
        next.key = index + 1;
        setIndex(index + 2);
        setPastConversation(pastConversation => [...pastConversation, current, next]);
    }, [pastConversation]);



    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight)
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 250);
    })

    const pastConversationDisplay = pastConversation.map((item) => (
        <ChatBox
            key={'chat' + item.key}
            text={item.text}
            isPrompt={DialogHelper.isPrompt(item)} >
            {(DialogHelper.isPrompt(item) && item.content)}
        </ChatBox>
    ));
    return (
        <div className="message-list">
            {pastConversationDisplay}

            <ChatBox text={current.text} isPrompt={DialogHelper.isPrompt(current)} >
                {(DialogHelper.isPrompt(current) && current.content)}
            </ChatBox>

            {DialogHelper.isPrompt(current) && (
                <Responses responses={current.responses} chooseHandler={chooseNext} />
            )}
        </div>
    )
}


export default Messages