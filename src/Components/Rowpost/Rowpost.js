import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import "./Rowpost.css"
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
function Rowpost(props) {
  const [movie, setMovie] = useState([])
  const [urlId,seturlId] = useState('')
  useEffect(()=>
  {
    axios.get(props.url).then((response)=>
    {
      console.log(response.data.results);
      setMovie(response.data.results)
    })
  },[])
    const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>
  {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>
    {
      if(response.data.results.length!==0)
      {
        seturlId(response.data.results[0])
      }
      else
      {
        console.log('Trailer Not Available..!!')
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>
          
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
            
            
        </div>
      {urlId &&  <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default Rowpost