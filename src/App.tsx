import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import TrendCarousel from './components/home/TrendCarousel';
import DiscoverPage from './pages/DiscoverPage';
import AnalysisPage from './pages/AnalysisPage';
import CollaborationPage from './pages/CollaborationPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'discover':
        return <DiscoverPage />;
      case 'analysis':
        return <AnalysisPage />;
      case 'collaborate':
        return <CollaborationPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return (
          <>
            <Hero />
            <TrendCarousel />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar onPageChange={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;