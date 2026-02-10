import Heder from "../components/Heder";
import Navbar from "../components/Navbar";
import BrandCTA from "../components/startup/BrandCTA";
import StartupMembers from "../components/startup/StartupMembers";

export const metadata = {
    title: "Zinkq | Startups",
    description: "Explore innovative startups from Sri Lanka’s startup ecosystem. Discover founders, products, and emerging companies supported by Zinkq.",
}

export default function Startup() {
    return (
        <>
            <Navbar />
            <Heder />
            <StartupMembers />
            <BrandCTA />
        </>
    )
}