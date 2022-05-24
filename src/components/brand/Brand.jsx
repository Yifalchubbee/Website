import './brand.css';
import img from '../../assets/img2.gif';
import { BsMouse } from 'react-icons/bs';

function Brand() {
  return (
    <div id='Brand' className='container Brand-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <img src={img} alt='' />
        </div>
      </div>
    );
  }

  export default Brand;