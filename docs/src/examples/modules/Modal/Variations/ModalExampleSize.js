import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const ModalExampleSize = () => {
  const [state, dispatch] = React.useReducer(reducer, { open: false })
  const { open, size } = state

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        Mini
      </Button>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Tiny
      </Button>
      <Button onClick={() => dispatch({ type: 'open', size: 'small' })}>
        Small
      </Button>
      <Button onClick={() => dispatch({ type: 'open', size: 'large' })}>
        Large
      </Button>
      <Button onClick={() => dispatch({ type: 'open', size: 'fullscreen' })}>
        Fullscreen
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            No
          </Button>
          <Button
            content='Yes'
            icon='checkmark'
            labelPosition='right'
            positive
            onClick={() => dispatch({ type: 'close' })}
          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ModalExampleSize
