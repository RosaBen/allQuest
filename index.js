function cutIt(arr) {
    //    récupérer la longueur minimale des élements de la liste
    const minLength = Math.min(...arr.map(e => e.length));
    //   couper chaque élément de la liste à la longueur minimale
    return arr.map(e => e.slice(0, minLength));

}
console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklm"]));
console.log(cutIt(["codewars", "javascript", "java"]));







// const aa = { x: 1, y: 6 }
// const bb = { x: 4, y: 2 }
// console.log(distanceBetweenPoints(aa, bb));

// const aaa = { x: -60, y: 12.5 }
// const bbb = { x: .3, y: 14.7 }
// console.log(distanceBetweenPoints(aaa, bbb));





