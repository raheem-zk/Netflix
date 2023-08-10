
import { useEffect, useState } from 'react';
import './RowPost.css';
import {  API_KEY, IMG_URL } from '../../constants/constants';
import axios from '../../constants/axios';
import YouTube from 'react-youtube';


function RowPost({title, isSmall, url}){
    const [movieList, setMovieList] = useState([]);
    const [urlId, setUrlId ]= useState(null);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setMovieList(response.data.results)
        })
        .catch((error)=>{
           alert('Network Error');
        })
    },[])
    // console.log(movieList);
    const handleMovieClick = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
            console.log('url id data ',response.data.results[0]);
            if (response.data.results.length !== 0){
                setUrlId(response.data.results[0]);
            }else{
                alert('Trailer not found');

            }
        }).catch((error)=>{
           alert('Network Error');
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return !movieList ? 'Loading....' : (
        <div className='row'>
            <h1>{title}</h1>
            <div className="posters">
                {movieList.map((item)=>(
                <img onClick={()=> handleMovieClick(item.id)} key={item.id} className={ isSmall ? 'smalPoster' :'poster'} src={IMG_URL+item.backdrop_path} alt="img" />
                ))}
            </div>
            { urlId &&  urlId.key && <YouTube videoId={urlId.key} opts={opts}  />}
        </div>
    )
}

export default RowPost;