function splitStrings(string) {
    if (string.length%2!==0) {
        string+='_';
    }

    let arr = [];

    for (let i = 0; i < string.length; i+=2) {
        arr.push(string[i]+string[i+1]);
    }
    return arr;
}

export default splitStrings