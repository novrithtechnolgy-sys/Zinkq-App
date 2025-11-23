import Heder from "../components/Heder";
import Navbar from "../components/Navbar";
import Contactpage from "../components/contact";

export const metadata = {
  title: "Zinkq | Contact",
  description: "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Heder />
      <Contactpage />
    </>
  );
}
