const dieRoll = Math.floor( Math.random() * 6 );

document.querySelector("main").innerHTML = `<h1>You rolled a ${dieRoll}, refresh the browser to roll once again</h1>.` 
console.log(`You rolled a ${dieRoll}`);
