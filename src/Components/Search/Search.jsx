import './Search.css'

//import icons
import {AiOutlineSearch} from 'react-icons/ai'


const Search = () => {
  return (
    <div className='search'>
     <div className="secondContainer container">
          <h2 className='title'>
            DISCOVER YOUR NEXT PURCHASE
          </h2>


          <div className="searchDiv grid">
            <input type="text" placeholder='Breed'/>
            <input type="number" placeholder='Age' />
            <input type="text" placeholder='Sex' />
            <input type="text" placeholder='Location' />
            <button className='btn primaryBtn flex'>
              <AiOutlineSearch className= "icon"/>
              <span>
            Search
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Search
