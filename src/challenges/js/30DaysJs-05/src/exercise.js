export function findFamousCats(cats) {
  let famousStats = {
    catNames: [],
    maxNumOfFollowers: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const totalFollowers = cat.followers.reduce(
      (acum, currentVal) => acum + currentVal,
      0
    );
    if (totalFollowers === famousStats.maxNumOfFollowers) {
      famousStats.catNames.push(cat.name);
    }

    if (totalFollowers > famousStats.maxNumOfFollowers) {
      famousStats.catNames = [];
      famousStats.catNames.push(cat.name);
      famousStats.maxNumOfFollowers = totalFollowers;
    }
  }

  return famousStats.catNames;
}
