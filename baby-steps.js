const argv = process.argv;
const numbers = argv.slice(2).map(item=>isNaN(item)==false?Number(item):0)
const countNumbers = (numbers) => {
    return numbers.reduce((current, next)=>current + next)
};
console.log(countNumbers(numbers));
