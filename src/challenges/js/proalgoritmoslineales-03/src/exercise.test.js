import { Nodo, isPalindrome } from "./exercise";

describe("tests", () => {
  it("should return true (odd)", () => {
    const nodo1 = new Nodo("a");
    const nodo2 = new Nodo("b");
    const nodo3 = new Nodo("a");
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;

    const rta = isPalindrome(nodo1);
    expect(rta).toEqual(true);
  });

  it("should return false (odd)", () => {
    const nodo1 = new Nodo("a");
    const nodo2 = new Nodo("b");
    const nodo3 = new Nodo("c");
    const nodo4 = new Nodo("c");
    const nodo5 = new Nodo("a");
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;

    const rta = isPalindrome(nodo1);
    expect(rta).toEqual(false);
  });

  it("should return true (even)", () => {
    const nodo1 = new Nodo("a");
    const nodo2 = new Nodo("b");
    const nodo3 = new Nodo("b");
    const nodo4 = new Nodo("a");
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;

    const rta = isPalindrome(nodo1);
    expect(rta).toEqual(true);
  });

  it("should return false (even)", () => {
    const nodo1 = new Nodo("a");
    const nodo2 = new Nodo("a");
    const nodo3 = new Nodo("c");
    const nodo4 = new Nodo("d");
    const nodo5 = new Nodo("a");
    const nodo6 = new Nodo("a");
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;
    nodo5.siguiente = nodo6;

    const rta = isPalindrome(nodo1);
    expect(rta).toEqual(false);
  });
});
