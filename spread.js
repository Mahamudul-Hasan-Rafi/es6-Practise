const list1=[9,8,2];
const list2=['p','q','r'];
const list3=[90.898,78.63,2,"PPE"];

const newList=list1.concat(list2).concat(list3);
const newList2=[list1,list2,list3];
const newList3=[...list1, ...list2, ...list3];//Spread operator(...)[3 dots][Recommended]
const newList4=list1+list2+list3;//Not a list. So never ever use this..

console.log(newList);
console.log(newList2);
console.log(newList3);
console.log(newList4);

const numbers=[90,88,12,91,87,65];
console.log(Math.max(...numbers));
