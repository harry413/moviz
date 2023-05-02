import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './heroBanner.scss'


const HeroBanner = () => {
        const [background, setBackground] = useState("");
        const [query, setQuery] = useState("");
        const navigate = useNavigate();
        const searchQueryHandler = (event) => {
                if(event.key==="Enter" && query.length > 0){
                    navigate(`/search/${query}`)
                }
        }

  return (
    <div className="herobanner">
        <div className="wrapper">
            <div className="herobannerContent">
                <span className="title">Welcome</span>
                <span className="subtitle">
                    Millions of movies, TV shows and people to discover. Explore now.
                </span>
                <div className="searchInput">
                    <input 
                        type="text" 
                        placeholder='Search for a Movie or Tv show......'
                        onChange={(e) => setQuery(e.target.value)} 
                        onKeyUp={searchQueryHandler} 
                    />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner