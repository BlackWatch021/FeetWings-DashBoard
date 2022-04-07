import './App.css';
import CareerDashBoard from './components/CareerDashBoard';
import Header from './components/Header';
import JobListing from './components/JobListing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';


function App() {
  return (
    <>
      <Header />;
      <Router>
        <Routes>
          <Route path='/' element={<CareerDashBoard />} />
          <Route path='/dashboard' element={<JobListing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      {/* <JobListing /> */}
    </>
  );
}

export default App;
