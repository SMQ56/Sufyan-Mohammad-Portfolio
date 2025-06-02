import "./Home.css";
import { cleanPage } from "../../utils/cleanPage.js";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="home">
  <ul class="items">
    <li style="--img: url('/icons/html.png')"></li>
    <li style="--img: url('/icons/css.png')"></li>
    <li style="--img: url('/icons/js.png')"></li>
    <li style="--img: url('/icons/react.png')"></li>
    <li style="--img: url('/icons/github.png')"></li>
    <li style="--img: url('/icons/mysql.png')"></li>
    <li style="--img: url('/icons/java.png')"></li>
    <li style="--img: url('/icons/angular.png')"></li>
    <li style="--img: url('/icons/typescript.png')"></li>
  </ul>

  <div class="home-content">
    <p>Hey, I'm</p>
    <h1>Sufyan</h1>
    <p>Full Stack Developer student in Spain, building modern web apps from front-end to back-end. Focused on learning, creating, and solving real problems.</p>
  </div>
  <img src="./icons/img-no-bg.png" alt="Profile photo" class="home-img">
  </section>
  `;
};
