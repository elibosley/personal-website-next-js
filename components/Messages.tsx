import { Component } from "react";
import startPrompt from '../model/WebsiteModel'
import DialogHelper from "../model/DialogHelper";
import ChatBox from "./ChatBox";
import Prompt from "../model/Prompt";
import UserResponse from "../model/UserResponse";

class Messages extends Component {
    state = {
        current: startPrompt,
        pastConversation: [] as Array<Prompt | UserResponse>
    }

    constructor(props) {
        super(props);
    }

    choose(next: UserResponse) {
        console.log(`Choosing ${next.text.toString()}`)
        const nextPrompt = next.nextPrompt;
        this.setState({
            pastConversation: [...this.state.pastConversation, this.state.current, next],
            current: nextPrompt
        });
    }


    renderResponses(): JSX.Element[] | null {
        if (DialogHelper.isPrompt(this.state.current)) {
            return this.state.current.responses.map((response, index) => {
                return (<button key={index} onClick={() => this.choose(response)}>{response.text.toString()}</button>)
            })
        } else return null;
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {this.state.pastConversation.map((converationItem, index) => {
                    return <ChatBox key={`${index + converationItem.text}`} text={converationItem.text} isPrompt={DialogHelper.isPrompt(converationItem)}/>
                })}
                {console.log(this.state.current)}
                <ChatBox text={this.state.current} isPrompt={DialogHelper.isPrompt(this.state.current)} />
                {this.renderResponses()}

            </div>
        )
    }
}

export default Messages