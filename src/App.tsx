import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './cmps/Header';
import Sidebar from './cmps/Sidebar';
import DashboardPage from './cmps/dashboard_page/DashboardPage';
// Import other pages here

function App() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  const onOpenDateSelector = () => {
    setIsDateSelectorOpen(true);
    document.body.classList.add('no-scroll');
  }

  return (
    <Router>
      <div className="screen">
        <Sidebar isCollapsed={isCollapsed}></Sidebar>
        <div className={`width-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
          <Header setIsCollapsed={(ev) => setCollapsed(ev)} isCollapsed={isCollapsed}></Header>
          {/* routed pages: */}
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            {/* Define more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
