import { useState } from 'react'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
import DashboardPage from './cmps/DashboardPage'

function App() {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <>
      <Sidebar isCollapsed={isCollapsed}></Sidebar>

      <div className={`width-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
        <Header setIsCollapsed={(ev) => setCollapsed(ev)} isCollapsed={isCollapsed}></Header>
        <DashboardPage />
      </div>
    </>
  )
}

export default App
