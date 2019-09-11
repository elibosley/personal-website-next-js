const ChatBox = (props) => (<div className="test">
    {props.isPrompt.toString()}
    <p>{props.text.toString()}</p>
</div>)

export default ChatBox