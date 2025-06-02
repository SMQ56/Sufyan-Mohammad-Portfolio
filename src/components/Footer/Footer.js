import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h2>Contact</h2>
<div>
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
</div>
<p>Powered by Sufyan</p>
`;
