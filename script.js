const inputElement = document.getElementById("inputElement");
const inputColor = document.getElementById("inputColor");
const inputWidht = document.getElementById("inputWidht");
const inputHieght = document.getElementById("inputHieght");
const btn = document.getElementById("btn");
const generated = document.getElementById("generated");
const input = document.getElementById("input");
const container = document.getElementById("container");
btn.addEventListener("click", () => {
  let elm = document.createElement(inputElement.value);
  switch (inputElement.value) {
    case "":
      elm.innerText = `input a element`;
      break;

    default:
      elm.innerText = `new ${inputElement.value}`;
      break;
  }
  input.style.display = "none";
  generated.classList.toggle("generated");
  elm.style.backgroundColor = `${inputColor.value}`;
  elm.style.width = `${inputWidht.value}px`;
  elm.style.height = `${inputHieght.value}px`;
  elm.style.marginBottom = `.3rem`;
  container.style.flexDirection = "column";
  const cont = document.createElement("a");
  cont.innerText = "Return";
  cont.setAttribute("href", "#");
  cont.classList.add("btn-return");
  cont.type = "submit";

  cont.style.marginTop = `2rem`;
  cont.addEventListener("click", () => {
    location.reload();
  });
  container.appendChild(cont);
  generated.appendChild(elm);
});
