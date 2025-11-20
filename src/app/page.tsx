import FoundersSection from "./components/Home/FoundersSection";
import Hero from "./components/Home/Hero";
import MembershipGallery from "./components/Home/MembershipGallery";
import WhatIsZinkq from "./components/Home/WhatIsZinkq";
import WhyJoinZinkq from "./components/Home/WhyJoinZinkq";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsZinkq />
      <WhyJoinZinkq />
      <FoundersSection />
      <MembershipGallery />
    </>
  );
}
