export function CardOposition(
  color,
  title,
  description,
  frequency,
  studyTime,
  request,
  photo
) {
  const $root = document.getElementById("root");
  $root.innerHTML = null;

  const $cardOposition = document.createElement("div");
  $cardOposition.classList.add("card-oposition");

  // Nombre de la oposición y descripción
  const $descriptionOposition = document.createElement("div");
  $descriptionOposition.classList.add("description-oposition");
  const $h2Title = document.createElement("h2");
  $h2Title.classList.add(color);
  $h2Title.innerText = title;
  const $pDescription = document.createElement("p");
  $pDescription.innerText = description;
  $descriptionOposition.appendChild($h2Title);
  $descriptionOposition.appendChild($pDescription);

  // Características de la oposición
  const $tags = document.createElement("div");
  $tags.classList.add("tags");
  const $h2Tags = document.createElement("h2");
  $h2Tags.classList.add(color);
  $h2Tags.innerText = "Detalles";

  const $pFrequency = document.createElement("p");
  $pFrequency.innerText = "Frecuencia oposición: ";
  const $strongFrequency = document.createElement("strong");
  $strongFrequency.classList.add(color);
  $strongFrequency.innerText = frequency;
  $pFrequency.appendChild($strongFrequency);

  const $pStudyTime = document.createElement("p");
  $pStudyTime.innerText = "Tiempo de estudio: ";
  const $strongstudyTime = document.createElement("strong");
  $strongstudyTime.classList.add(color);
  $strongstudyTime.innerText = studyTime;
  $pStudyTime.appendChild($strongstudyTime);

  const $pRequest = document.createElement("p");
  $pRequest.innerText = "Requisitos: ";
  const $strongRequest = document.createElement("strong");
  $strongRequest.classList.add(color);
  $strongRequest.innerText = request;
  $pRequest.appendChild($strongRequest);

  $tags.appendChild($h2Tags);
  $tags.appendChild($pFrequency);
  $tags.appendChild($pStudyTime);
  $tags.appendChild($pRequest);

  // Imagen oposición
  const $imageContainer = document.createElement("div");
  $imageContainer.classList.add("image-oposition", photo);

  // Agregamos todo al contenedor principal
  $cardOposition.appendChild($descriptionOposition);
  $cardOposition.appendChild($tags);
  $cardOposition.appendChild($imageContainer);

  return $cardOposition;
}
