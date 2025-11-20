import AboutSection from "../components/About/AboutSection";
import Community from "../components/About/community";
import OurPromise from "../components/About/OurPromise";
import OurStory from "../components/About/OurStory";
import WhatWeStandFor from "../components/About/WhatWeStandFor";
import Heder from "../components/Heder";
import Navbar from "../components/Navbar";


export default function About() {
    return (
        <>
          <Navbar />
          <Heder />
          <AboutSection />
          <OurStory />
          <WhatWeStandFor />
          <Community />
          <OurPromise />
        </>
    );
}