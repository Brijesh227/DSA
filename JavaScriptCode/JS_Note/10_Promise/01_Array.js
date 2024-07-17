// Async,await and promise with Array

async function hello(arr) {
    return Promise.all(arr.map(async (item) => {
        return {
            fromNum: await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(item * item);
                }, item * 1000);
            })
        };
    }));
}

async function hi() {
  const h = await hello([1, 2, 3]);
  console.log(h);
}

hi();

const results = await Promise.all(arr.map(async (item) => {
  const condition = await someAsyncCheck(item);
  return condition ? item : null; // return the item if condition is met
})).filter(Boolean);

const result = await arr.reduce(async (acc, item) => {
  const accumulated = await acc; // wait for the previous promise to resolve
  const newItem = await someAsyncOperation(item);
  return [...accumulated, newItem]; // accumulate results
}, Promise.resolve([]));
  