import EventsSection from "../components/Event/EventsSection";
import OnlineSessions from "../components/Event/OnlineSessions";
import StayUpdated from "../components/Event/StayUpdated";
import WorkshopsSection from "../components/Event/WorkshopsSection";
import Heder from "../components/Heder";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "Zinkq | Events",
    description: "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
}

export default function Events() {
    return (
        <>
            <Navbar />
            <Heder />
            <EventsSection />
            <OnlineSessions/>
            <WorkshopsSection/>
            <StayUpdated/>
        </>
    );
}