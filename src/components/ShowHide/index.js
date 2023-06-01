// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isSecondNameVisible: false}

  changeFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  changeLastName = () => {
    this.setState(prevState => ({
      isSecondNameVisible: !prevState.isSecondNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isSecondNameVisible} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="names-container">
          <div className="items-container">
            <button
              type="button"
              className="button"
              onClick={this.changeFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && <p className="name-container">Joe</p>}
          </div>
          <div className="items-container">
            <button
              type="button"
              className="button"
              onClick={this.changeLastName}
            >
              Show/Hide Lastname
            </button>
            {isSecondNameVisible && <p className="name-container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
