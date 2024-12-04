// import './index.css'
// import { Navbar } from './components/Navbar'
// import { Cards } from './components/Cards.jsx'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Cards />
//     </>
//   )
// }

// export default App

import './index.css';
import { Navbar } from './components/Navbar';
import { Cards } from './components/Cards';
import TournamentDetail from './components/TournamentDetail';
import RecentDetail from './components/RecentDetail';
import QuizDetail from './components/QuizDetail';
import CreateDetail from './components/CreateDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/tournaments" element={<TournamentDetail />} />
        <Route path="/recent" element={<RecentDetail />} />
        <Route path="/quiz" element={<QuizDetail />} />
        <Route path="/create" element={<CreateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
