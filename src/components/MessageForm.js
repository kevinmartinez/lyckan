import React from 'react'

const MessageForm = ({ messageChange }) => {
  return (
    <form>
      <label>
        Message:
        <input type="text" placeholder="text" onChange={messageChange} />
      </label>
    </form>
  )
}

export default MessageForm
