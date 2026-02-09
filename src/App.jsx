import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import Career from './components/Career/Career';
import JobList from './components/Career/JobList';
import { ApplyJob } from './components/ApplyJob/ApplyJob';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Service } from './components/Service/Service';

function App() {

  return (
    <>
      <div className="app-background">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/career' element={<Career />}>
              <Route index element={<JobList />} />
              <Route path='job/:id' element={<ApplyJob />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
