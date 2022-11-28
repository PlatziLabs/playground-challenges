import "./styles.css";
import { Banda, Integrante, } from "./exercise";

(() => {
  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
  }
  const banda = new Banda(data)
  document.getElementById("app").innerHTML = `
    <h2>Prototipos y Clases</h2>
    <p>Banda: <code>${JSON.stringify(banda)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
      banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
      rtaElement.innerHTML = `
      <p>Banda: <code>${JSON.stringify(banda)}</code></p>
      <p><pre><code id="rta">
      Tipo de clase de Banda: ${JSON.stringify(banda.constructor.name)}
      Tipo de clase de Integrantes: ${JSON.stringify(banda.integrantes[0].constructor.name)}
      </code></pre></p>
    `;
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
