import "./style.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `

<div class="background-grid"></div>

${Navbar()}

<main>

    ${Home()}

    ${Projects()}

    ${Contact()}

</main>

`;