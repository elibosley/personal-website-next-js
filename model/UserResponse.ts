import Prompt from "./Prompt";

/** Defines a response to a prompt */

class UserResponse {
    text: string;
    nextPrompt: Prompt | undefined;
    constructor(text, nextPrompt = undefined) {
        this.text = text;
        this.nextPrompt = nextPrompt;
    }

    public toString = (): string => {
        return this.text;
    }
}

export default UserResponse