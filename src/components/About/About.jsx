import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  <article class="markdown-body entry-content container-lg f5" itemprop="text">
                    <h2>
                      Hi there, I'm Khalid! 👋🏾
                    </h2>
                    <p>
                      I'm a fullstack web developer, aspiring game developer and comic book nerd. Thanks for checking out my website! Here are a couple of things about me:
                    </p>
                    <ul>
                      <li>
                        <g-emoji
                          class="g-emoji"
                          alias="office"
                          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e2.png"
                        >
                          🏢
                        </g-emoji>{' '}
                        I work with the Canada Revenue Agency and my current role is the technical applications lead, where I run backend and architecture for my team
                      </li>
                      <li>
                        <g-emoji
                          class="g-emoji"
                          alias="sunglasses"
                          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png"
                        >
                          😎
                        </g-emoji>{' '}
                        I'm currently learning the Unity and Unreal game engines
                      </li>
                      <li>
                        <g-emoji
                          class="g-emoji"
                          alias="thinking"
                          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png"
                        >
                          🤔
                        </g-emoji>{' '}
                        Currently trying to find interesting ways to communicate with others during
                        the pandemic via WebRTC
                      </li>
                      <li>
                        <g-emoji
                          class="g-emoji"
                          alias="iphone"
                          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4f1.png"
                        >
                          📱
                        </g-emoji>{' '}
                        Really interested in finding new ways to create more immersive experiences
                        on the web
                      </li>
                    </ul>
                  </article>
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
