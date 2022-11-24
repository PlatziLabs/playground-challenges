export function addNewAttr(array) {
  return array.map((item) => {
    const copyItem = {...item};
    copyItem.taxes = Math.trunc(copyItem.price * 0.19)
    return copyItem;
  });
}
