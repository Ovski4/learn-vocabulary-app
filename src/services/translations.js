const shuffle = (translations, randomNumbers) => {
    let array = [...translations];
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(randomNumbers[counter-1] * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

const unshuffle = (translations) => {
    return [...translations].sort(function(a, b) {
        return a.createdAt - b.createdAt;
    });
};

export default {
    unshuffle,
    shuffle
}