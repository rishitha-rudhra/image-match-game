import {Component} from 'react'
import NavBar from '../NavBar'
import ImageCard from '../ImageCard'
import './index.css'
import TabItem from '../TabItem'
import ScoreCard from '../ScoreCard'

class MatchGame extends Component {
  state = {
    activeTabId: 'FRUIT',
    score: 0,
    timer: 60,
    matchImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    showScore: false,
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    } else {
      this.clearTimer()
      this.setState({
        showScore: true,
      })
    }
  }

  changeActiveTab = id => {
    this.setState({
      activeTabId: id,
    })
  }

  onClickImage = id => {
    const {imagesList} = this.props
    const listLength = imagesList.length
    const {matchImageId, timer} = this.state
    if (id === matchImageId && timer > 0) {
      const randomIndex = Math.ceil(Math.random() * (listLength - 1))
      this.setState(prevState => ({
        matchImageId: imagesList[randomIndex].id,
        score: prevState.score + 1,
      }))
    } else {
      this.clearTimer()
      this.setState({
        showScore: true,
      })
    }
  }

  onClickPlayAgain = () => {
    clearInterval(this.timerId)
    this.setState({
      activeTabId: 'FRUIT',
      score: 0,
      timer: 60,
      matchImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      showScore: false,
    })
    this.componentDidMount()
  }

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {tabsList, imagesList} = this.props

    const {score, timer, activeTabId, matchImageId, showScore} = this.state

    if (showScore) {
      this.clearTimer()
    }

    const updatedList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    const matchImageDetailsList = imagesList.filter(
      each => each.id === matchImageId,
    )
    const matchImageDetails = matchImageDetailsList[0]
    const matchImageUrl = matchImageDetails.imageUrl

    return (
      <div className="app-container">
        <NavBar score={score} timer={timer} />
        {!showScore && (
          <div className="bg-container">
            <img src={matchImageUrl} alt="match" className="random-img" />
            <ul className="tabs-container">
              {tabsList.map(eachTab => (
                <TabItem
                  tabDetails={eachTab}
                  activeTabId={activeTabId}
                  changeActiveTab={this.changeActiveTab}
                  key={eachTab.tabId}
                />
              ))}
            </ul>
            <ul className="images-container">
              {updatedList.map(eachImageItem => (
                <ImageCard
                  imageDetails={eachImageItem}
                  key={eachImageItem.id}
                  onClickImage={this.onClickImage}
                />
              ))}
            </ul>
          </div>
        )}
        {showScore && (
          <div className="bg-container">
            <ScoreCard score={score} onClickPlayAgain={this.onClickPlayAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
