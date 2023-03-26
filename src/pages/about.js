import React from 'react';
import Layout from '../components/layout';
// import './About.css';

const About = () => {
    return (
        <Layout>
            <div className="about-container"style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h1>About Me</h1>

                <section className="introduction">
                    <h2>Introduction</h2>
                    <p>
                        Hi, I'm Arthur Smith, a software engineer and aspiring educator. This website showcases my academic research and
                        professional software engineering work to help me connect with
                        graduate school programs, potential employers, and like minded individuals.
                    </p>
                </section>

                <section className="background">
                    <h2>Background</h2>
                    <p>
                        I am currently a Senior Software Engineer at JumpCrew. I work with wonderful individuals, and love my work. My day-to-dat consists of collaberating with my team, assisting jr developers, and building high quality software for small business owners
                        <br />
                        <br />

                        I also work a non-profit coding bootcamp called Nashville software school. I am a jr instructor for many courses inluding Digital UI/UX, and Web Devlopment cohorts.
                        <br />
                        <br />

                        In my spare time, I am working to finish my Bachelor's degree in Computer Science from University of the People.
                        During my time at UoPeople, I am attempting to participate in several research
                        projects, including one that explored the use of natural language
                        processing techniques in educational applications.
                    </p>
                </section>

                <section className="professional-experience">
                    <h2>Professional Experience</h2>
                    <p>
                        As a software engineer, I've had the opportunity to work with many wonderful companies, where I've developed web applications and backend
                        systems using languages such as Python, and JavaScript. My work
                        has resulted in significant performance improvements and a more
                        streamlined user experience for our clients.
                    </p>
                </section>

                <section className="research-interests">
                    <h2>Research Interests</h2>
                    <p>
                        My research interests lie at the intersection of artificial
                        intelligence and education, as well as computer science foundations. I'm particularly interested in exploring
                        how machine learning and natural language processing can improve
                        educational outcomes and create more personalized learning
                        experiences.
                    </p>
                </section>

                <section className="skills-technologies">
                    <h2>Skills & Technologies</h2>
                    <p>
                        I'm proficient in a variety of programming languages, frameworks, and
                        tools, including:
                    </p>
                    <ul>
                        <li>Python, JavaScript, Java</li>
                        <li>React, Angular, Vue.js, Next.js</li>
                        <li>Node.js, Django</li>
                        <li>Git, Docker</li>
                        <li>AWS, Azure</li>
                    </ul>
                </section>

                <section className="personal-interests">
                    <h2>Personal Interests</h2>
                    <p>
                        Outside of work and academia, I enjoy hiking, spending ample time with my family, and
                        exploring new cities. I also love to learn about new technologies
                        and stay up-to-date with the latest developments in my field.
                    </p>
                </section>

                <section className="contact-information">
                    <h2>Contact Information</h2>
                    <p>
                        If you'd like to get in touch, please feel free to email me at{' '}
                        <a href="mailto:arthurrankin1992@gmail.com">arthurrankin1992@gmail.com</a>{' '}
                        or connect with me on{' '}
                        <a href="https://www.linkedin.com/in/arthur-smith-2281b5156/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        .
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default About;
