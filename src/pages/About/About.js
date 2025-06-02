import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section id="about">
      <div class="container">
        <div class="row">

          <div class="about-col-1">
            <img src="./icons/img.png" alt="Profile photo">
          </div>

          <div class="about-col-2">
            <h1 class="sub-title">About Me</h1>
            <p>
              I am a passionate and dedicated web developer currently pursuing a Higher National Diploma in Web Application Development (DAW) at Prometeo FP by thePower Education, alongside a Master's in Full Stack Development. I enjoy building clean, responsive, and user-friendly web applications using modern technologies.
            </p>
            <p>
              Through practical projects like landing pages, dynamic product galleries, and personal portfolios, I am building strong programming skills and a solid understanding of front-end development. I am eager to keep learning and take on new challenges in the tech world.
            </p>
            <p>
              Originally from Pakistan, I was born and raised in Spain, which has given me a diverse cultural perspective and adaptability. Outside of coding, I love sports—especially cricket, which I follow passionately.
            </p>
            <p>
              I'm always curious and open to collaborating on new projects or learning about emerging technologies to improve my craft.
            </p>

            <div class="tab-titles">
              <p class="tab-links active-link" onclick="opentab(event, 'skills')">Skills</p>
              <p class="tab-links" onclick="opentab(event, 'experience')">Experience</p>
              <p class="tab-links" onclick="opentab(event, 'education')">Education</p>
            </div>

            <div id="skills" class="tab-contents active-tab">
              <ul>
                <li>HTML5, CSS3, JavaScript (DOM, Fetch API, LocalStorage)</li>
                <li>Java (OOP, Exception Handling)</li>
                <li>MySQL (Queries, Joins, Data Modeling)</li>
                <li>Git & GitHub (Version Control)</li>
                <li>Linux, VirtualBox (System Admin Basics)</li>
              </ul>
            </div>

            <div id="experience" class="tab-contents">
              <ul>
                <li>Landing page inspired by Epic Games Store using HTML and semantic layout</li>
                <li>Product layout built with pure Flexbox to explore responsive design</li>
                <li>Dynamic product gallery using JavaScript and DOM manipulation</li>
                <li>Personal portfolio SPA built with Vite and reusable components</li>
              </ul>
            </div>

            <div id="education" class="tab-contents">
              <ul>
                <li>Bachelor's Degree (Scientific-Technological) - (Completed)</li>
                <li>HND in Web Application Development (DAW) - Prometeo (Ongoing)</li>
                <li>Master's in Full Stack Development (Ongoing)</li>
                <li>Microsoft Certified: Azure Fundamentals (AZ-900) - In progress</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  `;

  window.opentab = function (evt, tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    evt.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  };
};
