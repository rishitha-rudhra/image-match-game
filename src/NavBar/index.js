import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <ul className="navbar-container">
      <li className="logo-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <li>
        <p>Score:</p>
      </li>
      <li className="score">{score}</li>

      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-img"
        />
      </li>
      <li>
        <p className="timer">{timer} sec</p>
      </li>
    </ul>
  )
}

export default NavBar
