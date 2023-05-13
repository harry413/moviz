import React,{useState} from 'react'

import  ContentWrapper  from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";

import "../home.scss";
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const {data , loading} = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) => {
      setEndpoint(tab === "Movie" ? "movie" : "tv show");
    };


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTabs data={["Movie", "Tv Show"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default TopRated