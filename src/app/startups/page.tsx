import Heder from "../components/Heder";
import Navbar from "../components/Navbar";
import BrandCTA from "../components/startup/BrandCTA";
import StartupMembers from "../components/startup/StartupMembers";

export const metadata = {
    title: "Zinkq | Startups",
    description: "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
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