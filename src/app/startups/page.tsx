import Heder from "../components/Heder";
import Navbar from "../components/Navbar";
import BrandCTA from "../components/startup/BrandCTA";
import StartupMembers from "../components/startup/StartupMembers";

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