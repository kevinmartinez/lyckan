import React from 'react'
import PropTypes from 'prop-types';

const MessageForm = (props) => {
  return (
    <form>
      <label>
        Message:
        <input type="text" placheholder="text" onChange={props.messageChange} />
      </label>
    </form>
  )
}

export default MessageForm;
