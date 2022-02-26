var dogName = prompt("You get a new puppy. What will you name it?");
console.log("dogName: ", dogName);

if (dogName == 'puppy') {
    document.write('Error: failed to answer the question')
} else {
    document.write("Find " + dogName)
}

// document.write(dogName);