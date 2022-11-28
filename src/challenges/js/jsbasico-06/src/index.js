import "./styles.css";
import { solution } from "./exercise";

(() => {
  const car1 = { color: 'red', brand: 'Kia' };
  const car2 = { color: 'gray', brand: 'Chevrolet', licensePlate: 'AAA111' };
  const car3 = { licensePlate: 'RGB255' };

  document.getElementById("app").innerHTML = `
    <h2>Permiso para conducir</h2>
    <p>Carro 1: <code>${JSON.stringify(car1)}</code></p>
    <p>Carro 2: <code>${JSON.stringify(car2)}</code></p>
    <p>Carro 3: <code>${JSON.stringify(car3)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = 'Carro 1: ';
      rtaElement.innerHTML += JSON.stringify(solution(car1), null, 1);
      rtaElement.innerHTML += '<br><br>';
      rtaElement.innerHTML += 'Carro 2: ';
      rtaElement.innerHTML += JSON.stringify(solution(car2), null, 1);
      rtaElement.innerHTML += '<br><br>';
      rtaElement.innerHTML += 'Carro 3: ';
      rtaElement.innerHTML += JSON.stringify(solution(car3), null, 1);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
