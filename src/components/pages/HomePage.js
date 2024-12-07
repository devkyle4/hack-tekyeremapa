import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import MiddleNavbar from "../MiddleNavbar.js";
import FAQSection from "./faqs";
import Timeline from "./timeline";
import CountdownTimer from "../Timer";
import { QRCodeSVG } from "qrcode.react"; // Import QRCodeSVG

const downloadDataset = () => {
  window.open(
    "https://huggingface.co/datasets/hci-lab-dcsug/akan_speech_data/tree/main",
    "_blank"
  );
};

function HomePage() {
  return (
    <div className="hackathon-page">
      {/* Main Content Section */}
      <div className="main-content">
        <div className="tags-section">
          <div className="tags-container">
            <span className="tag">In-Person</span>
            <span className="tag">Free</span>
            <span className="tag">Team Size: 1-5</span>
          </div>
        </div>
        {/* Overview, About, Rules, etc. */}
        <section id="overview" className="section overview">
          <h2>Overview</h2>
          <p>
            Join us for the Tɛkyerɛma Pa Hackathon 2025, an innovation-driven
            event aimed at designing and developing a groundbreaking app in Akan
            to support individuals with speech impairments. This hackathon
            invites tech enthusiasts, developers, linguists, and accessibility
            advocates to collaborate on creating a tool that empowers effective
            and inclusive communication for all.
          </p>
        </section>
        <MiddleNavbar />
        {/* About Section */}
        <section id="about" className="section key-goals">
          <h3>About</h3>
          <div className="about-hack">
            <p className="about-1">
              The Tɛkyerɛma Pa Hackathon 2025 invites all university students
              and technology advocates to participate in creating innovative
              solutions that will make a significant impact on individuals with
              speech impairments in Ghana and beyond.
            </p>
            <p className="about-2">
              At this hackathon, participants will be given the unique
              opportunity to help bridge the communication gap for individuals
              with speech disabilities through the development of cutting-edge
              technologies such as speech-to-text (STT) and automatic speech
              recognition (ASR) tailored for the Akan language. By focusing on
              these areas, the hackathon aims to create accessible tools that
              empower individuals to communicate more effectively in their
              native language, breaking down barriers to inclusion.
            </p>
          </div>
          <ul>
            <li>
              Integrate speech-to-text (STT) or automatic speech recognition for
              Akan.
            </li>
            <li>
              Develop an intuitive and user-friendly interface tailored to the
              unique needs of individuals with speech impairments, prioritizing
              ease of use, cultural relevance, and inclusivity.
            </li>
            <li>
              Address accessibility standards, enabling individuals with varying
              levels of impairment to use the app seamlessly.
            </li>
            <li>Scalability of the app to other Ghanaian languages.</li>
          </ul>
          <button className="about-link download-btn" onClick={downloadDataset}>
            Link to Dataset
          </button>
        </section>
        {/* Rules Section */}
        <section id="rules" className="section rules">
          <h2>Rules</h2>
          <ul>
            <li>Each team is expected to have a maximum of 5 members.</li>
            <li>Each team must include at least one female participant.</li>
            <li>All code must be written during the hackathon.</li>
            <li>
              Preferably, each team should have an individual with any form of
              speech impairment.
            </li>
          </ul>
        </section>
        <Timeline />
        {/* Awards Section */}
        <section id="prizes" className="section awards">
          <h2>Awards</h2>
          <ul>
            <li>
              Up to £5,000 in awards plus $5000 cash prize from project Euphonia
            </li>
            <li>
              Mentorship opportunities with experts from Google and GDI Hub,
              University College of London.
            </li>
            <li>A potential scholarship for an MSc in Computer Science.</li>
          </ul>
        </section>
        <FAQSection />
        {/* Sponsors Section */}
        <section id="sponsors" className="section sponsors">
          <h2>Sponsors</h2>
          <img src="/gdi_hub.png" alt="GDI Hub" />
          <img src="/hci-black.png" alt="HCI Lab" />
          <a
            href="https://sites.research.google/euphonia/about/"
            className="euphonia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Euphonia
          </a>
        </section>
      </div>

      {/* Register Card and QR Code together in a parent div */}
      <div className="register-card-container">
        <div className="register-card">
          <CountdownTimer />
          <h3>Register Now</h3>
          <p>
            Don't miss out on this amazing opportunity to make a difference!
          </p>
          <Link
            to="https://link.webropol.com/s/hacktetremapa"
            className="register-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Link>
        </div>

        {/* QR Code Section for Registration */}
        <div className="qr-code-container">
          <h3>Scan the QR Code to Register</h3>
          <QRCodeSVG
            value="https://link.webropol.com/s/hacktetremapa"
            size={200}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
