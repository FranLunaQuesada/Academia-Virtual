document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
  keepColorHeader();
  menuHeaderPhone();
  formContact();
  // ubicationAcademy();
  dinamicDateExams($GCExam, guardiaCivil);
  dinamicDateExams($PLExam, policiaNacional);
  dinamicDateExams($MTMExam, ejercito);
  dinamicDateExams($CAExam, aduanas);
  dinamicDateExams($CBExam, bomberos);
}

const $GCExam = document.getElementById("nextExamGC");
const $PLExam = document.getElementById("nextExamPN");
const $MTMExam = document.getElementById("nextExamMTM");
const $CAExam = document.getElementById("nextExamCA");
const $CBExam = document.getElementById("nextExamCB");
let guardiaCivil = [
  "Plazas ofertadas: 1500",
  "Examen: 23/10/2023",
  "Requisitos mínimos: ESO",
  "Plazas libres: Sí",
];

let policiaNacional = [
  "Plazas ofertadas: 2748",
  "Examen: 15/09/2023",
  "Requisitos mínimos: Bachillerato",
  "Plazas libres: Sí",
];

let ejercito = [
  "Plazas ofertadas: 2200",
  "Examen: 11/10/2023",
  "Requisitos mínimos: Ninguno",
  "Plazas libres: Sí",
];

let aduanas = [
  "Plazas ofertadas: 320",
  "Examen: 10/12/2023",
  "Requisitos mínimos: Ninguno",
  "Plazas libres: Sí",
];

let bomberos = [
  "Plazas ofertadas: según localidad",
  "Examen: 23/10/2023",
  "Requisitos mínimos: ESO",
  "Plazas libres: Sí",
];

const dinamicDateExams = (paragraph, array) => {
  const $dinamicSpan = document.createElement("span");

  $dinamicSpan.textContent = array[0];
  paragraph.insertAdjacentElement("afterend", $dinamicSpan);

  let contador = 1;
  setInterval(() => {
    $dinamicSpan.textContent = array[contador];
    contador++;
    paragraph.insertAdjacentElement("afterend", $dinamicSpan);
    if (contador >= array.length) contador = 0;
  }, 4000);
};

const keepColorHeader = () => {
  const $headerNav = document.querySelectorAll(".header-nav");
  $headerNav.forEach((link) => {
    if (
      link.href === window.location.href &&
      link.innerText.includes("Metodología")
    ) {
      link.classList.add("active-gray");
    } else if (
      link.href === window.location.href &&
      link.innerText.includes("Oposiciones")
    ) {
      link.classList.add("active-red");
    } else if (
      link.href === window.location.href &&
      link.innerText.includes("Cursos")
    ) {
      link.classList.add("active-blue");
    } else if (
      link.href === window.location.href &&
      link.innerText.includes("Contacto")
    ) {
      link.classList.add("active-orange");
    }
  });
};

const menuHeaderPhone = () => {
  const $menuToggle = document.querySelector(".menu-toggle");
  const $menuToggleTop = document.querySelector(".top-line");
  const $menuToggleMid = document.querySelector(".mid-line");
  const $menuToggleBot = document.querySelector(".bot-line");
  const $textContentMenuToggle = document.querySelector(
    ".text-content-menu-toggle"
  );
  const $menuToggleOptions = document.querySelector(".menu-toggle-options");
  const $socialMedia = document.querySelector(".redes-sociales");
  let isToggled = false;

  $menuToggleOptions.style.display = "none";

  $menuToggle.addEventListener("click", () => {
    $menuToggleTop.classList.toggle("join-menu-header-top");
    $menuToggleMid.classList.toggle("join-menu-header-mid");
    $menuToggleBot.classList.toggle("join-menu-header-bottom");

    isToggled = !isToggled;
    if (isToggled) {
      $textContentMenuToggle.textContent = "CERRAR";
      $menuToggleOptions.style.display = "";
      $socialMedia.style.display = "flex";
    } else {
      $textContentMenuToggle.textContent = "MENU";
      $menuToggleOptions.style.display = "none";
      $socialMedia.style.display = "";
    }
  });
};

const formContact = () => {
  const $form = document.querySelector(".form form");
  const $inputs = document.querySelectorAll(".form [required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern;

      if ($input.value === "") {
        document.getElementById($input.name).style.display = "none";
      }

      let regex = new RegExp(pattern);
      return !regex.exec($input.value)
        ? (document.getElementById($input.name).style.display = "block")
        : (document.getElementById($input.name).style.display = "none");
    }
  });

  document.addEventListener("submit", (e) => {
    // e.preventDefault();
    // alert("Enviando formulario");

    const $userEmail = document.querySelector(
      ".input-form[type='email']"
    ).value;
    $form.action = `https://formsubmit.co/${$userEmail}`;

    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");

    $loader.style.display = "block";

    setTimeout(() => {
      $loader.style.display = "none";
      $response.style.display = "block";
      $form.reset();

      setTimeout(() => ($response.style.display = "none"), 3000);
    }, 3000);
  });
};

// const ubicationAcademy = () => {
//   const mapDiv = document.querySelector(".map");
//   let map;
//   function initMap() {
//     navigator.geolocation.watchPosition(() => {
//       const pos = {
//         lat: 41.706999,
//         lng: -1.001539,
//       };
//       map = new google.maps.Map(mapDiv, {
//         center: pos,
//         zoom: 15,
//       });
//       marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//       });
//     });
//   }
//   window.initMap = initMap;
// };
