import Prompt from '../model/Prompt'
import UserResponse from '../model/UserResponse'

export const Responses: React.FC<{
    responses: Array<UserResponse>
    chooseHandler: (response: UserResponse) => void
}> = (props) => (
    <div className="button-container">
        {
            props.responses.map((response, index) => {
                return (<button key={index}
                    onClick={() => props.chooseHandler(response)}>{response.text.toString()}
                </button>)
            })
        }
        <style jsx > {`
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
        </style >
    </div >
)