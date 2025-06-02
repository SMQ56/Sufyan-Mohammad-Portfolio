import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const currentImg = themeBtn.querySelector("img");

  const newImg = document.createElement("img");
  newImg.width = 24;
  newImg.height = 24;

  if (currentImg?.alt === "moon") {
    newImg.src = "/icons/sun.png";
    newImg.alt = "sun";
  } else {
    newImg.src = "/icons/moon.png";
    newImg.alt = "moon";
  }

  themeBtn.innerHTML = "";
  themeBtn.appendChild(newImg);
};

export const Navbar = () => `
  <nav>
    <h2 id="name">Sufyan M.</h2>
    <ul>
      <li>
        <a href="#" id="homelink">Home</a>
      </li>
      <li>
        <a href="#" id="projectslink">Projects</a>
      </li>
      <li>
        <a href="#" id="aboutlink">About</a>
      </li>
      <li>
        <button id="themeBtn">
          <img src="/icons/sun.png" alt="sun" width="24" />
        </button>
      </li>
    </ul>
  </nav>
`;
