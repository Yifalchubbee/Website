import{ Footer } from './../../containers';
import { General } from './../../components';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './blog1.css';
import Blog1 from './Blog1'


const Home = () => {
   return (
      <div className="App">
        <div className="gradient__bg">
            <General />
            <Blog1 />
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <div className="brand">
        </div>
        <Footer />
        </div>
    </div>
   )
}

export default Home