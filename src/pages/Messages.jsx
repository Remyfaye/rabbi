import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { messages, users } from "../constants"
import Message from "../components/Message"
import { BsFillSendFill } from "react-icons/bs";
import Upload from "../components/Upload";


const Messages = () => {
    const {userId} = useParams()
    const [user] = users.filter(user => user.id === userId)
    console.log(user.name)

  return (
    <div>
        <Navbar/>

        <div className="mt-20">

            {/* messsagee profile */}
            <div className="flex items-center gap-3 m-5 border-b-2 pt-3 pb-5">
                <img 
                className="w-10 h-10 rounded-full object-cover"
                src={user.imgUrl}/>
                <h1>{user.name}</h1>
            </div>

            {/* mobile view */}

            <div className="lg:hidden"> 

                {/* messages */}
                {messages.map(message => (
                    // eslint-disable-next-line react/jsx-key
                    <Message message={message} userId={userId}/>
                ))}

                {/* write a message */}
                <div className="border-2 bg-white fixed bottom-0 w-full p-5 flex gap-7 items-center justify-center">
                    <div className="flex justify-center">
                        <textarea className="border-2 px-10  rounded-2xl m-auto" placeholder="write a message..."></textarea>
                    </div>
                    <p className="text-2xl font-bold"><BsFillSendFill/></p>

                </div>

            </div>

            {/* laptop view */}
            <div className="hidden lg:flex">

                <div className="border-2 m-5 rounded-xl">

                    {/* messages */}
                    {messages.map(message => (
                        // eslint-disable-next-line react/jsx-key
                        <Message message={message} userId={userId}/>
                    ))}

                    {/* write a message */}
                    <div className="border-2 bg-white fixed bottom-0 p-5 flex gap-7 items-center justify-center">
                        <div className="flex justify-center">
                            <textarea className="border-2 px-10  rounded-2xl m-auto" placeholder="write a message..."></textarea>
                        </div>
                        <p className="text-2xl font-bold"><BsFillSendFill/></p>

                    </div>

                </div>

                <div>
                    <Upload/>
                </div>
            </div>

        </div>

      
    </div>
  )
}

export default Messages
