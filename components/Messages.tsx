import { Component } from "react";
import websiteModel from '../model/WebsiteModel'
import DialogHelper from "../model/DialogHelper";
import ChatBox from "./ChatBox";
import Prompt from "../model/Prompt";
import UserResponse from "../model/UserResponse";
import Colors from "../styles/colors";

class Messages extends Component {
    state = {
        current: websiteModel.startPrompt,
        pastConversation: [] as Array<Prompt | UserResponse>
    }

    choose(next: UserResponse): void {
        console.log(`Choosing ${next.text.toString()}`)
        let nextPrompt = next.nextPrompt ? next.nextPrompt : websiteModel.notImplementedResponse;
        this.setState({
            pastConversation: [...this.state.pastConversation, this.state.current, next],
            current: nextPrompt
        });

    }

    renderResponses(): JSX.Element {
        if (DialogHelper.isPrompt(this.state.current)) {
            return (
                <div className="button-container">
                    {this.state.current.responses.map((response, index) => {
                        return (<button key={index}
                            onClick={() => this.choose(response)}>{response.text.toString()}
                        </button>)
                    })}
                    <style jsx>{`
                        .button-container {
                            display: flex;
                            flex-direction: column;
                        }
                        button {
                            padding: 1em;
                            border: solid 1px ${Colors.white};
                            background: none;
                            border-radius: 1rem;
                            font-size: 14px;
                        }
                        `}
                    </style>
                </div>)
        } else return (<div></div>)
    }

    render() {
        return (
            <div className="message-list">
                {this.state.pastConversation.map((converationItem, index) => {
                    return <ChatBox key={`${index + converationItem.text}`}
                        text={converationItem.text}
                        isPrompt={DialogHelper.isPrompt(converationItem)} >
                        {(DialogHelper.isPrompt(converationItem) && converationItem.content)}
                    </ChatBox>
                })}
                <ChatBox text={this.state.current.text} isPrompt={DialogHelper.isPrompt(this.state.current)} >

                    {(DialogHelper.isPrompt(this.state.current) && this.state.current.content)}
                </ChatBox>
                {this.renderResponses()}
            </div>
        )
    }
}


export default Messages