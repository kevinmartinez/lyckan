import React from 'react'

const MessageForm = props => {
  return (
    <form>
      <label>
        Message:
        <input type="text" placheholder="text" onChange={props.messageChange} />
      </label>
    </form>
  )
}

export default MessageForm
