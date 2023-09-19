import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import { Achievement, Categories, Companies, Courses,Feedback, } from './components';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <Feedback/>
        <Cta/>
        <Footer/>
      
      </div>
    </>
  );
}

export default App;
