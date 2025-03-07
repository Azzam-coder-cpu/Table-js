let getrandomnum = (min,max) => {
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getrandomnum(7,9));
console.log(getrandomnum(10,20));