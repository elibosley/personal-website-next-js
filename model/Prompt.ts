import UserResponse from "./UserResponse";

/** Defines a question or answer with possible responses */
interface Prompt {
    text: string;
    content?: any;
    responses: UserResponse[];
}

class Prompt {
    text: string;
    content?: any;
    responses: UserResponse[];

    key: number;
    constructor(text: string, responses: UserResponse[], content: any = undefined) {
        this.text = text;
        this.responses = responses;
        this.content = content;
        this.key = 0;
    }

    public toString = (): string => {
        return this.text;
    }



}

export default Prompt;