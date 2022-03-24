import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

export default class ErrorModal extends Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.error}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.errorMessage}</p>
        </Modal.Body>
      </Modal.Dialog>
    )
  }
}
