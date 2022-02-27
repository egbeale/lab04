var dogName = prompt("You get a new puppy. What will you name it?");
console.log("dogName: ", dogName);

if (dogName == 'puppy') {
    document.write('Error: failed to answer the question')
} else {
    document.write("Find " + dogName)
}

// document.write(dogName);

// for loop
function displayRating() {
    let output = "";
    let rating = prompt('on a scale from 1-5, how would rate dogs?');
    for (let i = 0; i < rating; i++) {
        output = output + "🐕";
    }
    return document.write(output);
}

// shorthand for output = output + "🐕";
    // output += "🐕";