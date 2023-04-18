import "./styles.css";
import { LinkedListRecharged } from "./exercise";

(() => {
  const linkedList = new LinkedListRecharged();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  document.getElementById("app").innerHTML = `
    <h3>Singly linked list</h3>
    <form id="form-first" >
      <label for="val">Escribe un valor</label>
      <p></p>
      <input name="val" placeholder="Get or remove (index)" />
      <p><button type="button" id="btn-get">Get</button><p/>
      <p><button type="button" id="btn-remove">Remove</button><p/>
    </form>
    <form id="form-second" >
      <label for="val">Escribe un valor</label>
      <p></p>
      <input name="val" placeholder="Insert (value)" />
      <p></p>
      <label for="val">Escribe una posición</label>
      <p></p>
      <input name="index" placeholder="insert (index)" />
      <p><button type="button" id="btn-insert">Insert</button><p/>
      </form>
      <p><button type="button" id="btn-array">To array</button><p/>

    <p><pre><code id="rta"></code></pre></p>
    <p><pre><code id="head" >Head: ${JSON.stringify(linkedList.head)}</code></pre></p>
    <p><pre><code id="tail" >Tail: ${JSON.stringify(linkedList.tail)}</code></pre></p>
  `;

  const getBtn = document.querySelector('#btn-get');
  const firstForm = document.querySelector("#form-first")
  const secondForm = document.querySelector("#form-second")
  const deleteBtn = document.querySelector('#btn-remove');
  const insertBtn = document.querySelector("#btn-insert")
  const arrayBtn = document.querySelector("#btn-array")
  const rtaElement = document.querySelector('#rta');


  const head = document.querySelector("#head")
  const tail = document.querySelector("#tail")

  getBtn.addEventListener('click', (e) => {
    try {
      const value = firstForm[0].value
      const rta = linkedList.get(Number(value))
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = error.message
    }
  });


  deleteBtn.addEventListener("click", (e) => {
    try {
      const value = firstForm[0].value
      const rta = linkedList.removeAt(Number(value))
      rtaElement.innerHTML = JSON.stringify(rta);
      head.innerHTML = `Head: ${JSON.stringify(linkedList.head)}`
      tail.innerHTML = `Tail: ${JSON.stringify(linkedList.tail)}`
    } catch (error) {
      rtaElement.innerHTML = error.message
    }
  })

  insertBtn.addEventListener("click", (e) => {
    try {
      const value = secondForm[0].value
      const position = secondForm[1].value
      linkedList.insertAt(Number(position), Number(value))
      head.innerHTML = `Head: ${JSON.stringify(linkedList.head)}`
      tail.innerHTML = `Tail: ${JSON.stringify(linkedList.tail)}`
    } catch (error) {
      rtaElement.innerHTML = error.message
    }
  })

  arrayBtn.addEventListener("click", (e) => {
    try {
      const rta = linkedList.toArray()
      rtaElement.innerHTML = JSON.stringify(rta);
    } catch (error) {
      rtaElement.innerHTML = error.message
    }
  })
})();
