import { Component } from "react";
import websiteModel from '../model/WebsiteModel'
import DialogHelper from "../model/DialogHelper";
import ChatBox from "./ChatBox";
import Prompt from "../model/Prompt";
import UserResponse from "../model/UserResponse";
import Colors from "../styles/colors";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: flex-end;
                        }
                        button {
                            max-width: 10rem;
                            min-width: 8rem;
                            margin: 0.2rem;
                            flex-basis: 40%;
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
                <CSSTransition
                in={true}
                timeout={200}
                classNames="fadeNewChats">
                    <ChatBox text={this.state.current.text} isPrompt={DialogHelper.isPrompt(this.state.current)} >

                        {(DialogHelper.isPrompt(this.state.current) && this.state.current.content)}
                    </ChatBox>
                </CSSTransition>
                {this.renderResponses()}
                <style jsx>{`
                    .fadeNewChats-enter {
                        opacity: 0.01;
                    }
                    .fadeNewChats-enter-active {
                        opacity: 1;
                        transition: opacity 200ms;
                    }
                    

                    `}</style>
            </div>
        )
    }
}


export default Messages