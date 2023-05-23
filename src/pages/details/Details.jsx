import React,{useState}  from 'react';

import useFetch from "../../hooks/useFetch";

import './details.scss'
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';


const Details = () => {

  const { mediaType, id } = useParams(0);
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);


  return (
    <div>
        <DetailsBanner videos={data?.result?.[0]} crew={credits?.crew} />
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <VideosSection data={data} loading={loading}/>
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details