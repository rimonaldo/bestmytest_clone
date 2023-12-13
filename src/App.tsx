import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './cmps/Header';
import Sidebar from './cmps/Sidebar';
import DashboardPage from './cmps/dashboard_page/DashboardPage';
import TestPage from './cmps/test_page/TestPage';
import useStore from './store/testStore';
import TestList from './cmps/test_page/TestList';
import { QueryClientProvider, QueryClient } from 'react-query';
import TestItem from './cmps/test_page/TestItem';
import TestListPage from './cmps/test_page/TestListPage';
const queryClient = new QueryClient()
// Import other pages here

function App() {
  const [isCollapsed, setCollapsed] = useState(false);
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  const onOpenDateSelector = () => {
    setIsDateSelectorOpen(true);
    document.body.classList.add('no-scroll');
  }

  const { loadTest, test, initialTest } = useStore()

  // load test on mount
  useEffect(() => {
    loadTest("1")
  }, [])


  // when test changes log it
  useEffect(() => {

    console.log(test + 'from app')
  }, [test])



  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="screen">
          <Sidebar isCollapsed={isCollapsed}></Sidebar>
          <div className={`width-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
            <Header setIsCollapsed={(ev) => setCollapsed(ev)} isCollapsed={isCollapsed}></Header>
            {/* routed pages: */}
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              {/* Define more routes here */}
              <Route path="/test" element={<TestListPage />} />
              <Route path="/test/:id" element={<TestItem />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
