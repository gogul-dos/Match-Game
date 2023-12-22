import '../App.css'

const TabItem = ({tab, isSelected, onTabClick}) => {
  const handleTabClick = () => {
    onTabClick(tab.tabId)
  }

  return (
    <li>
      <button
        onClick={handleTabClick}
        type="button"
        className={isSelected ? 'selected-button' : 'unselected-button'}
      >
        {tab.displayText}
      </button>
    </li>
  )
}

export default TabItem
