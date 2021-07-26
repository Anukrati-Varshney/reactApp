import React from 'react';
import web from "../src/images/4380.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
       <Common name="Grow your bussiness with" imgsrc={web} visit='/service'
       btname = "Get Started" />
        </>
    );

};
export default Home;