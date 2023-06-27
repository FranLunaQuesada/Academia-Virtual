export function TitleDefault() {
  const $principlesHeader = document.createElement("article");
  $principlesHeader.classList.add("principles-header");
  const $h2 = document.createElement("h2");
  $h2.innerText = "Catálogo de Oposiciones";
  const $p = document.createElement("p");
  $p.innerText =
    "Aquí puedes ver los detalles de las oposiciones que oferecemos. Todas ellas en el apartado de la atención al ciudadano. En caso de los bomberos, por ahora nos centramos en la ciudad de Zaragoza (Aragón).";
  $principlesHeader.appendChild($h2);
  $principlesHeader.appendChild($p);
  return $principlesHeader;
}
