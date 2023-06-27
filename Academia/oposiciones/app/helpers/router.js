import { CardOposition } from "../components/CardOposition.js";
import {
  letterColor,
  titleOposition,
  descriptionOposition,
  frequencyOposition,
  studyOposition,
  requestOposition,
  photoOposition,
} from "./descriptionsOposition.js";

const $root = document.getElementById("root");
const $optionsOposition = document.querySelectorAll(".category");

export function Router() {
  $optionsOposition.forEach((option) => {
    console.log(option);
    option.addEventListener("click", (e) => {
      if (option.classList.contains("bg-blue")) {
        $root.innerHTML = "";
        $root.appendChild(
          CardOposition(
            letterColor.guardiaCivil,
            titleOposition.guardiaCivil,
            descriptionOposition.guardiaCivil,
            frequencyOposition.guardiaCivil,
            studyOposition.guardiaCivil,
            requestOposition.guardiaCivil,
            photoOposition.guardiaCivil
          )
        );
      } else if (option.classList.contains("bg-violet")) {
        $root.innerHTML = "";
        $root.appendChild(
          CardOposition(
            letterColor.policiaNacional,
            titleOposition.policiaNacional,
            descriptionOposition.policiaNacional,
            frequencyOposition.policiaNacional,
            studyOposition.policiaNacional,
            requestOposition.policiaNacional,
            photoOposition.policiaNacional
          )
        );
      } else if (option.classList.contains("bg-green")) {
        $root.innerHTML = "";
        $root.appendChild(
          CardOposition(
            letterColor.ejercito,
            titleOposition.ejercito,
            descriptionOposition.ejercito,
            frequencyOposition.ejercito,
            studyOposition.ejercito,
            requestOposition.ejercito,
            photoOposition.ejercito
          )
        );
      } else if (option.classList.contains("bg-red")) {
        $root.innerHTML = "";
        $root.appendChild(
          CardOposition(
            letterColor.aduanas,
            titleOposition.aduanas,
            descriptionOposition.aduanas,
            frequencyOposition.aduanas,
            studyOposition.aduanas,
            requestOposition.aduanas,
            photoOposition.aduanas
          )
        );
      } else if (option.classList.contains("bg-orange")) {
        $root.innerHTML = "";
        $root.appendChild(
          CardOposition(
            letterColor.bomberos,
            titleOposition.bomberos,
            descriptionOposition.bomberos,
            frequencyOposition.bomberos,
            studyOposition.bomberos,
            requestOposition.bomberos,
            photoOposition.bomberos
          )
        );
      }
    });
  });
}
