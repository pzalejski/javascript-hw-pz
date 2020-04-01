function matchDogName(string, names) {
    for (i = 0; i < string.length; i++ ){
        if (string.indexOf(names[i]) !== -1) {
            return 'Matched dog_name'
        } else {
            return 'No Matches'
        }
    }
}

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']

console.log(matchDogName(dog_string, dog_names))


function replaceEven(string) {
    for (let i = 0; i < string.length; i = i+2) {
        string.splice([i], 1, 'even index')
    }
    console.log(string)
}
    

arr = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

replaceEven(arr)