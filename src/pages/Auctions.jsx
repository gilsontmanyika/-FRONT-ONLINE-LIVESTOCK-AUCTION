import Navbar from '../Components/Navbar/Navbar'
import './styles/Auctions.css'
import { Link } from 'react-router-dom'

const Auctions = () => {
  return (
    <div>
      <div className='auctions'>
        <Navbar />
      </div>
      <div className='overala'>
      <div className='contents'>
        <h1 className='head'>
          AUCTIONS
        </h1>
        <p className='para'>
          creating a leveled play field!
        </p>
        <div className="options">
          <ul className='optionList'>
            <li className='listItem'>
              <Link to="/listing" className='link'>
                REGISTER YOUR CATTLE
              </Link>
            </li>
            <li className='listItem'>
              <Link to="/browsing" className='link'>
                BROWSE AVAILABLE AUCTIONS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Auctions
