import { useState } from "react"
import InMessage from "./InMessage"
// import OutMessage from "./OutMessage"
import axios from 'axios'
import { useEffect } from "react"

function Chat() {

  let [ messages, setMessages ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4040/messages')
    .then(res => { setMessages(res.data) })
    .catch(console.log)
  }, [])

  return (
    <div className="w-full h-screen p-5 overflow-y-scroll pt-20 pb-32">
      {
        messages.map(msg => <InMessage key={msg.id} message={msg} />)
      }
    </div>
  )
}

export default Chat