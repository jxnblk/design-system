import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'pcln-design-system'

export default class ModalDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  static propTypes = {
    children: PropTypes.node,
  }

  toggleModal() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) =>
          React.cloneElement(child, {
            isOpen: this.state.isOpen,
            onClose: this.toggleModal,
          })
        )}
        <Button onClick={this.toggleModal}>Open modal</Button>
      </div>
    )
  }
}
