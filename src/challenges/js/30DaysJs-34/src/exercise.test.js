import { ContactList } from "./exercise";

describe("tests", () => {
  let contactList;

  beforeEach(() => {
    contactList = new ContactList(10);
  });

  it("should insert a new contact in the hash table", () => {
    contactList.insert("Mr michi", "123-456-7890");

    const result = [["Mr michi", "123-456-7890"]];
    const rta = contactList.retrieveAll();

    expect(rta).toEqual(result);
  });

  it("should insert multiple contacts in the same index of the hash table", () => {
    contactList.insert("Mr Michi", "123-456-7890");
    contactList.insert("Mr Michi", "123-456-3456");
    contactList.insert("Mr firulais", "555-555-5556");

    const result = [
      ["Mr Michi", "123-456-7890"],
      ["Mr Michi", "123-456-3456"],
      ["Mr firulais", "555-555-5556"],
    ];

    const rta = contactList.retrieveAll();

    expect(rta).toEqual(result);
  });

  it("should return the phone number of a contact", () => {
    contactList.insert("Mr Michi", "123-456-7890");

    const expected = "123-456-7890";
    const rta = contactList.get("Mr Michi");

    expect(rta).toEqual(expected);
  });

  it("should return null if the contact is not found", () => {
    const expected = null;
    const rta = contactList.get("John Doe");

    expect(rta).toEqual(expected);
  });

  it("should return an empty array if there are no contacts", () => {
    const expected = [];
    const rta = contactList.retrieveAll();

    expect(rta).toEqual(expected);
  });

  it("should return an array with all the contacts", () => {
    contactList.insert("Mr Michi", "123-456-7890");
    contactList.insert("Mr firulais", "555-555-5556");

    const expected = [
      ["Mr Michi", "123-456-7890"],
      ["Mr firulais", "555-555-5556"],
    ];
    const rta = contactList.retrieveAll();

    expect(rta).toEqual(expected);
  });

  it("should delete a contact from the hash table", () => {
    contactList.insert("Mr firulais", "555-555-5556");
    contactList.delete("Mr firulais");

    const expected = [];
    const rta = contactList.retrieveAll();

    expect(rta).toEqual(expected);
  });

  it("should return null if the contact is not found", () => {
    contactList.insert("Mr firulais", "555-555-5556");
    const expected = null;
    const rta = contactList.delete("Mr Michi");

    expect(rta).toEqual(expected);
  });
});
