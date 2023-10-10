import React from "react";
import { stackList } from "../../data/ProjectData";
import { Technologies, Tech, TechImg, TechName } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div className="Container" id="about">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Eric Nguyen</strong>. I am an aspiring
              Full-Stack Engineer who loves to learn during his spare time.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I graduated from Harvey Mudd College with a Bachelor's degree in
              Computer Science and a minor in Economics. Out of college, I
              worked as a Software Quality Assurance Tester for a company named
              Transparent Langauge (TL), which provided a language learning
              application much like Rosetta Stone. I manually tested TL's web
              application and reported any issues on Jira. During my time at TL,
              I discovered an interest in automation testing and began acquiring
              the necessary skills to transition to an automation engineer. I
              landed a job as an Associate Software Engineer at Allscripts, a
              software company that specialized in software for electronic
              health records.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              There, I wrote my first automation test script and helped the
              Quality Assurance team test for regressions before code releases.
              As I tested Allscripts application, I realized I wanted more of a
              hand in the UI aspect of the application. Better yet, I wanted to
              know how to create an application from scratch.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Fast forward to my job at Paperless Parts, a SaaS startup
              specializing in quoting for manufacturing, I gained an immense
              amount of experience with React and Django. I really enjoyed
              working with those frameworks and made the resolve to better equip
              myself as a Full-Stack Engineer. From then, I've taken multiple
              web-development related courses including courses on HTML, CSS,
              JavaScript, React and Node.js/Express.js.
              <div className="tagline2">
                Over time, I have become confident with the following languages
                and technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
