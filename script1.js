const f = document.getElementById("form");
const q = document.getElementById("query");
const searchengine = "https://duckduckgo.com/?q=";

function submitted(event) {
  event.preventDefault();
  const url = searchengine + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);
