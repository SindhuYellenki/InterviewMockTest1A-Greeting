import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListItem from './component/ListItem'
import './App.css'

class App extends Component {
  state = {wordList: [], text: ''}

  renderNoListView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt=" no user inputs"
    />
  )

  renderListView = wordList => (
    <ul>
      {wordList.map(each => (
        <ListItem details={each} key={each.id} />
      ))}
    </ul>
  )

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickAddListItem = () => {
    const {text} = this.state
    const newListItem = {id: uuidv4(), word: text, length: text.length}
    this.setState(p => ({wordList: [...p.wordList, newListItem], text: ''}))
  }

  render() {
    const {wordList, text} = this.state

    return (
      <div>
        <div>
          <h1>Count the characters like a Boss</h1>
          {wordList.length === 0
            ? this.renderNoListView()
            : this.renderListView(wordList)}
        </div>
        <form>
          <h1>Character Counter</h1>
          <input
            type="text"
            placeholder="Enter the Characters here"
            value={text}
            onChange={this.onChangeText}
          />
          <button type="button" onClick={this.onClickAddListItem}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default App
