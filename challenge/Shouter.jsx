import { useState } from "react";

function Shouter() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <input name="message" value={message} onChange={(event) => setMessage(event.target.value)}/>
      <output>{message.toUpperCase()}</output>
    </div>
  )
}

export default Shouter