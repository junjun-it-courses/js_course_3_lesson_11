// const a = 2;
// a = 3;

// try {
//
//     const a = 2;
//     a = 3;
//
// } catch(error) {
//     console.log('some error');
//     console.log(error)
//     console.log(typeof error);
//     console.dir(error);
// }


async function request() {
    try {
        let a = await fetch('htt//jsonplaceholder.typicode.com/todos/1')
        a = await a.json();
        console.log(a)
    } catch(error) {
        console.dir(error)
    }
}

request();