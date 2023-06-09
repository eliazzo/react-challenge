import { useState } from "react";

function Shouter(props) {
  let [message, updateMessage] = useState(''); // message takes the original value and updateMessage is the state updater function

  return (
    <div>
      <input type="text" value={message} onChange={(event) => updateMessage(event.target.value)}/>
      <output>{message.toUpperCase()}</output>
    </div>
  )
}

export default Shouter