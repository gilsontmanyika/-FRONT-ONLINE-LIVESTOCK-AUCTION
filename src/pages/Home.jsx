
import './styles/Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">
        <div className="homeText">
          <h1 className="homeTitle">
            WELCOME!
          </h1>
          <p className="homePara">Join others today</p>
          <div className="detail-btns flex">
            <button className='the-btn'>
              <Link to="/directions">
                More Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
