import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  buttonText = () => {
    this.setState(preState => ({isSubscribe: !preState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
