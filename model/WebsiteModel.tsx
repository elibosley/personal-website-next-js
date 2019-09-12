import Prompt from "./Prompt";
import UserResponse from "./UserResponse";
import DialogHelper from "./DialogHelper";
import dynamic from "next/dynamic";
const ResumeViewer = dynamic(() => import('../components/ResumeViewer'));
/**
 * Default Export is the finalized model with all Prompt and UserResponse objects finalized
 */

const resumeResponse = new Prompt("Here's my resume: ", [], <ResumeViewer />);
const resumeRequest = new UserResponse("Show me your resume", resumeResponse);
const aboutMeResponse = new Prompt(`I'm a software engineer at WillowTree Apps. I enjoy creating cool projects and building things using awesome new technologies (like Next.js which this site is built in!).

In my free time I'm dancing, in a cave spelunking, or enjoying nature.`, []);
const aboutMeRequest = new UserResponse("Tell me about yourself", aboutMeResponse);
const creationInfoRequest = new UserResponse("How did you make this?");

const defaultResponses: UserResponse[] = [resumeRequest, aboutMeRequest, creationInfoRequest];
const experienceResponse = new Prompt("I have experience in various different frameworks for web - from React with Redux to Reagent with Reframe. I'm learning iOS in my free time at work right now! I also have experience with many tooling services like TeamCity, Docker, and various AWS services.", defaultResponses);
const aboutMeFollowUpRequest = new UserResponse("What kind of experience do you have?", experienceResponse)


const startPrompt = new Prompt("Hi, I'm Eli! What do you want to talk about?", defaultResponses);

const notImplementedResponse = new Prompt("Sorry, I don't know that yet!", defaultResponses);

aboutMeResponse.responses = [aboutMeFollowUpRequest];
resumeResponse.responses = defaultResponses;

export default {
    notImplementedResponse,
    startPrompt
}
