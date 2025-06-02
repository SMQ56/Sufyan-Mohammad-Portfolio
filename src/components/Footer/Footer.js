import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h2>Contact</h2>
<div>
<a href="https://github.com/SMQ56" target="_blank">
    ${Button("/icons/github.png", "GitHub")} 
</a>
<a href="https://www.linkedin.com/in/sufyan-mohammad" target="_blank">
    ${Button("/icons/linkedin.png", "LinkedIn")}
</a>
</div>
<p>Powered by Sufyan</p>
`;
