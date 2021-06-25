import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OurBrand from "../OurBrand/OurBrand";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";


const Home = () => {
    return (
        <main id="main">
            <Banner></Banner>
            <Services></Services>
            <OurBrand></OurBrand>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </main>
    );
};

export default Home;
