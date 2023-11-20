import { useState } from 'react'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
function App() {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <>
      <Header setIsCollapsed={(ev)=>setCollapsed(ev)} isCollapsed={isCollapsed}></Header>
      <Sidebar isCollapsed={isCollapsed}></Sidebar>
    </>
  )
}

export default App
