import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const UnderConstruction = () => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <h1>Under Construction</h1>
      <p>
        This site is currently under construction. We'll be adding more content
        soon. Stay tuned!
      </p>
      <h2>Upcoming Features:</h2>
      <ul>
        <li>Learning Journal Entries</li>
        <li>CV / Resume</li>
        <li>Blog Content</li>
        <li>Testimonials / Feedback from Professors</li>
      </ul>
      <h2>About Me</h2>
      <p>
        My name is Arthur Smith, and I am a software engineer and aspiring educator based in Nashville, Tennessee. With five years of experience in the field, I have already graduated from Nashville Software School's coding boot camp and am currently pursuing a bachelor's degree in computer science from the University of the People.

        Although I am in the early stages of his academic journey, I am deeply passionate about computing in education. My interests lie in exploring the potential of technology to enhance learning experiences, promote computer science foundations, and enable personalized learning through artificial intelligence.

        As a Nashville native, I am proud to contribute to the growth and development of the local tech community. My long-term career goals include becoming an educator, researcher, or advocate for the role of computing in educational settings.
        
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default UnderConstruction;
