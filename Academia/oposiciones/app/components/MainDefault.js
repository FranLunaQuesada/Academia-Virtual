export function MainDefault() {
  const $mainContent = document.createElement("div");
  $mainContent.classList.add("main-content");
  $mainContent.appendChild(initMainDefault());
  $mainContent.appendChild(ContentMainDefault());
  return $mainContent;
}

function initMainDefault() {
  const $p = document.createElement("p");
  $p.classList.add("start-title");
  $p.innerText = "Características de nuestra academia";
  return $p;
}

function ContentMainDefault() {
  const $columns = document.createElement("div");
  $columns.classList.add("columns", "oposition-main");
  const $columnH2 = document.createElement("div");
  $columnH2.classList.add("column");
  const $h2 = document.createElement("h2");
  $h2.innerText =
    "Estamos a tu disposición 7 días a la semana, los 365 días del año.";
  const $divImageColumn = document.createElement("div");
  const $image = document.createElement("img");
  $image.setAttribute("src", "../images/oposicion-main-default.jpg");
  $image.setAttribute("alt", "El estudio es importante");
  $divImageColumn.appendChild($image);
  $columnH2.appendChild($h2);
  $columnH2.appendChild($divImageColumn);
  $columns.appendChild($columnH2);

  const $columnP = document.createElement("div");
  $columnP.classList.add("column");

  const $pHeader = document.createElement("p");
  $pHeader.classList.add("p");
  const $strongPHeader = document.createElement("strong");
  $strongPHeader.innerText =
    "Nuestra academia, fundada en 2019, ha logrado establecerse como líder en la educación en línea. Nos enorgullece ofrecer una amplia gama de cursos especializados para aquellos que buscan seguir una carrera en áreas como la Policía Nacional, Guardia Civil o ejército entre otras";
  $pHeader.appendChild($strongPHeader);

  const $pContent1 = document.createElement("p");
  $pContent1.classList.add("p");
  $pContent1.innerText =
    "Nuestros cursos están diseñados por expertos en cada campo, brindando un enfoque integral y actualizado en la formación de profesionales en estas áreas tan importantes. Cubrimos todos los aspectos necesarios para el éxito en estas profesiones, desde los conocimientos teóricos fundamentales hasta las habilidades prácticas y las últimas regulaciones y procedimientos.";
  const $pContent2 = document.createElement("p");
  $pContent2.classList.add("p");
  $pContent2.innerText =
    "Además de la calidad de nuestros cursos, nos enorgullece ofrecer una plataforma de aprendizaje en línea de última generación. Nuestros estudiantes tienen acceso a recursos interactivos, materiales de estudio exhaustivos y la posibilidad de interactuar con instructores y compañeros de clase en un entorno virtual colaborativo.";
  const $pContent3 = document.createElement("p");
  $pContent3.classList.add("p");
  $pContent3.innerText = "Por eso hacemos las cosas de manera diferente.";
  const $pContent4 = document.createElement("p");
  $pContent4.classList.add("p");
  $pContent4.innerText =
    "Si estás buscando una academia que ofrezca cursos de alto nivel, estás en el lugar correcto. Nuestra academia está comprometida con tu éxito y te brindará los conocimientos y habilidades necesarios para destacarte en estas profesiones desafiantes. Únete a nosotros y descubre las oportunidades que te esperan en tu camino hacia una carrera exitosa.";

  $columnP.appendChild($pHeader);
  $columnP.appendChild($pContent1);
  $columnP.appendChild($pContent2);
  $columnP.appendChild($pContent3);
  $columnP.appendChild($pContent4);

  $columns.appendChild($columnP);

  return $columns;
}
