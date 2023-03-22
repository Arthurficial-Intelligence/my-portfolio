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
        [Your short bio goes here. Introduce yourself, mention your education,
        and share your interests in computer science.]
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default UnderConstruction;
