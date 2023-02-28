import { Nodo, reorderList } from "./exercise";

describe("tests", () => {
  it("should return [1,6,2,5,3,4]", () => {
    const nodo1 = new Nodo(1);
    const nodo2 = new Nodo(2);
    const nodo3 = new Nodo(3);
    const nodo4 = new Nodo(4);
    const nodo5 = new Nodo(5);
    const nodo6 = new Nodo(6);
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;
    nodo5.siguiente = nodo6;
    
    const reorderedList = reorderList(nodo1);
    const rta = [
      reorderedList?.valor,
      reorderedList?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.siguiente?.siguiente?.valor,
    ];
    
    const expected = [1,6,2,5,3,4];

    expect(rta).toEqual(expected);
  });

  it("should return [1,7,2,6,3,5,4]", () => {
    const nodo1 = new Nodo(1);
    const nodo2 = new Nodo(2);
    const nodo3 = new Nodo(3);
    const nodo4 = new Nodo(4);
    const nodo5 = new Nodo(5);
    const nodo6 = new Nodo(6);
    const nodo7 = new Nodo(7);
    nodo1.siguiente = nodo2;
    nodo2.siguiente = nodo3;
    nodo3.siguiente = nodo4;
    nodo4.siguiente = nodo5;
    nodo5.siguiente = nodo6;
    nodo6.siguiente = nodo7;
    
    const reorderedList = reorderList(nodo1);
    const rta = [
      reorderedList?.valor,
      reorderedList?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.siguiente?.siguiente?.valor,
      reorderedList?.siguiente?.siguiente?.siguiente?.siguiente?.siguiente?.siguiente?.valor,
    ];
    
    const expected = [1,7,2,6,3,5,4];

    expect(rta).toEqual(expected);
  });
});
