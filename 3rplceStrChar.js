// js to replace every charachter in a given string with the 
// character following it in the alphabet

const replaceChar = (str)=>{
    const sttng = str.split('')
    return sttng.map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('')
}

//kafsgkash

console.log(replaceChar('az'))