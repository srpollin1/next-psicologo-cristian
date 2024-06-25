"use client";

import React from "react";
import Navbar from "./assets/Navbar"
import Footer from "./assets/Footer"
import BannerOne from "./assets/Banners/BannerOne"
import SectionOne from "./assets/Sections/SectionOne"
import SectionTwo from "./assets/Sections/SectionTwo"
import SectionThree from "./assets/Sections/SectionThree"
import SectionFour from "./assets/Sections/SectionFour"

export default function Home() {
    return (
        <>
            <Navbar />
            <BannerOne />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </>
    )
}