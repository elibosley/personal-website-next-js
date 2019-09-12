import Prompt from "./Prompt";

/** Defines a response to a prompt */

class UserResponse {
    text: string;
    nextPrompt?: Prompt;
    constructor(text: string, nextPrompt?: Prompt) {
        this.text = text;
        this.nextPrompt = nextPrompt;
    }

    public toString = (): string => {
        return this.text;
    }
}

export default UserResponse