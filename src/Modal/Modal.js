import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button className="modalButton" onClick={() => this.setState({ isOpen: true })}>How to add todo?</button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1 style={{color: 'white'}}>How to add todo?</h1>
              <p style={{color: 'white'}}>To create a todo enter its title and click on the button "Add todo"</p>
              <button className="closeButton" onClick={() => this.setState({ isOpen: false })}>Ok</button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}