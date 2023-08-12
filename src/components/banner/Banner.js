import { useEffect, useState } from 'react';
import './Banner.css';
import { IMG_URL} from '../../constants/constants';
import axios from '../../constants/axios';
import { original } from '../../constants/urls';
import BannerShimmer from '../shimmer effect/BannerShimmer';

function Banner(){
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        axios.get(original).then((response)=>{
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[randomIndex])
        })
        .catch((error)=>{
            alert('Network error')
        })
    },[])

    return !movie ? <BannerShimmer/> :(
        <div className='banner' style={{backgroundImage:`URL(${IMG_URL+movie.backdrop_path})`}}>
             
            <div className='contant'>
                <h1 className='title'>{!movie.original_title ? movie.original_name : movie.original_title}</h1>
                <div className='banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='discription'>{movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;