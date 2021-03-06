import Prompt from "./Prompt";
import UserResponse from "./UserResponse";
import { Component } from "react";

class DialogHelper extends Component {
    
    public static isPrompt(item: Prompt | UserResponse): item is Prompt {
        if (!item) {
            return false;
        }
        return (item as Prompt).responses !== undefined;
    }
}

export default DialogHelper