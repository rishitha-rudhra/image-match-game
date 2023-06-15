import './index.css'

const ScoreCard = props => {
  const {score, onClickPlayAgain} = props

  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="text">YOUR SCORE</p>
      <h1>{score}</h1>
      <button type="button" className="play-again-btn" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
