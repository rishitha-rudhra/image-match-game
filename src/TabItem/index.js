import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, changeActiveTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClass = tabId === activeTabId ? 'active-tab' : ''

  const onChangeTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className={`tab-item ${activeTabClass}`} onClick={onChangeTab}>
      <button className="tab-btn">{displayText}</button>
    </li>
  )
}

export default TabItem
