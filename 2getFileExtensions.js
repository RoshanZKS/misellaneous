// write a Js to program to get the extension of a filename

const getFileExtension =(str)=> str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('work.js'))
console.log(getFileExtension('index.html'))
console.log(getFileExtension('webpack.config.js'))