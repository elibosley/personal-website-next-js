import Prompt from "./Prompt";
import UserResponse from "./UserResponse";
import DialogHelper from "./DialogHelper";

/**
 * Default Export is the finalized model with all Prompt and UserResponse objects finalized
 */
const resumeResponse = new UserResponse("Show me your resume");
const aboutMeRequest = new UserResponse("Tell me about yourself");
const creationInfoResponse = new UserResponse("How did you make this?");

const defaultResponse: UserResponse[] = [resumeResponse, aboutMeRequest, creationInfoResponse];
const aboutMeResponse = new Prompt(`Hi! My name is Elijah Bosley and I'm a fourth year at the University of Virginia. I enjoy creating cool projects and building things using awesome new technologies.

In my free time I'm dancing, in a cave spelunking, or enjoying nature.`, null);

const startPrompt = new Prompt("Hi, I'm Eli! What do you want to talk about?", defaultResponse)
aboutMeRequest.nextPrompt = aboutMeResponse;
aboutMeResponse.responses = defaultResponse;
export default startPrompt;
