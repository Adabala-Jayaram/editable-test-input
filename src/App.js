import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {
    isClicked: false,
    userText: '',
  }

  onClickSaveButton = this.setState(prevState => ({
    isClicked: !prevState.isClicked,
  }))

  onEnterText = event => this.setState({onEnterText: event.target.value})

  render() {
    const {isClicked} = this.state
    return (
      <div className="card-container">
        <div className="text-card">
          <h1>Editable Text Input</h1>
          <div className="input-value-sec">
          {isClicked ? (<p>d</p>) : (<input type="text" onChange={this.onEnterText} />
                              <button type="button" onClick={this.onClickSaveButton}>
                                Save
                                </button>)}
            
          </div>
        </div>
      </div>
    )
  }
}
export default App
