//Async function always returns a Promise and if that function is not returning promise by it self and returning a value then it will automatically gets wrapped inside a promise and will return it

async function getData() {
    return "Namaste"
}
const dataPromise = getData()
dataPromise.then((res) => console.log(res))

//async is a keyword that is used to create a async function
//await is a keyword that only be used inside the async function to handle a Promises

//async await vs Promise then catch
//async await is just a syntactic sugar coz behind the seen javascvript uses its own method to work with promise