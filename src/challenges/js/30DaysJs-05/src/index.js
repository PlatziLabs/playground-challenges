import "./styles.css";
import { findFamousCats } from "./exercise";

(() => {
  const cats = [
    {
      name: "Mimi",
      followers: [320, 120, 70],
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200],
    },
    {
      name: "Gizmo",
      followers: [250, 750],
    },
  ];

  document.getElementById("app").innerHTML = `
    <h2>Encuentra a los gatitos más famosos</h2>
    <div class="table">
      <div id="names">
        <h3>Names</h3>
        </div>
        <div id="followers">
        <h3>Followers</h3>
      </div>
    </div>
    <p><button id="btn">Averigua quienes son los gatitos más famosos</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById("btn");
  const rtaElement = document.getElementById("rta");

  const names = document.getElementById("names");
  const followers = document.getElementById("followers");

  cats.map((cat) => {
    names.innerHTML += `<p>${cat.name}<p>`;
    followers.innerHTML += `<p>${cat.followers.join(" | ")}</p>`;
  });

  runBtn.addEventListener("click", () => {
    try {
      const rta = findFamousCats(cats);
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = JSON.stringify(error, null, 1);
    }
  });
})();
