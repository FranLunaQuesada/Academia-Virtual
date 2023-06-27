import { MainDefault } from "./components/MainDefault.js";
import { TitleDefault } from "./components/TitleDefault.js";
import { Router } from "./helpers/Router.js";

const $root = document.getElementById("root");
const $defaultContent = document.createElement("div");

export function App() {
  $root.innerHTML = null;
  $defaultContent.classList.add("default-content");
  $defaultContent.appendChild(TitleDefault());
  $defaultContent.appendChild(MainDefault());
  $root.appendChild($defaultContent);

  Router();
}
