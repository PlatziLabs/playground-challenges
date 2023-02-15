import { Nodo, oddEvenList } from "./exercise";

describe("tests", () => {
  it("should return [1,3,5,2,4]", () => {
    const nodo1 = new Nodo(1);
    const nodo2 = new Nodo(2);
    const nodo3 = new Nodo(3);
    const nodo4 = new Nodo(4);
    const nodo5 = new Nodo(5);
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;

    const reorderedList = oddEvenList(nodo1);
    const actual = [
      reorderedList.id,
      reorderedList.siguiente.id,
      reorderedList.siguiente.siguiente.id,
      reorderedList.siguiente.siguiente.siguiente.id,
      reorderedList.siguiente.siguiente.siguiente.siguiente.id,
    ];

    const expected = [
      nodo1.id,
      nodo3.id,
      nodo5.id,
      nodo2.id,
      nodo4.id,
    ];
    
    expect(actual).toEqual(expected);
  });

  it("should return [a,c,e,b,d,f]", () => {
    const nodo1 = new Nodo("a");
    const nodo2 = new Nodo("b");
    const nodo3 = new Nodo("c");
    const nodo4 = new Nodo("d");
    const nodo5 = new Nodo("e");
    const nodo6 = new Nodo("f");
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;
    nodo5.siguiente = nodo6;

    const reorderedList = oddEvenList(nodo1);
    const actual = [
      reorderedList.id,
      reorderedList.siguiente.id,
      reorderedList.siguiente.siguiente.id,
      reorderedList.siguiente.siguiente.siguiente.id,
      reorderedList.siguiente.siguiente.siguiente.siguiente.id,
      reorderedList.siguiente.siguiente.siguiente.siguiente.siguiente.id,
    ];

    const expected = [
      nodo1.id,
      nodo3.id,
      nodo5.id,
      nodo2.id,
      nodo4.id,
      nodo6.id,
    ];
    
    expect(actual).toEqual(expected);
  });
});
