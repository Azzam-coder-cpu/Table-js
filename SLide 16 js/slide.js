const n = prompt("Enter a number");
if (n) { console.log(`Table for ${n}` )
for (let i = 1; i <= 10; i++) {
    console.log(n + "*" + i + '=' + (n * i) )
}
}