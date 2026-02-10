import Heder from "../components/Heder";
import Navbar from "../components/Navbar";
import Contactpage from "../components/contact";

export const metadata = {
  title: "Zinkq | Contact",
  description: "Get in touch with Zinkq. Reach our team for partnerships, events, and startup support in Sri Lanka.",
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
