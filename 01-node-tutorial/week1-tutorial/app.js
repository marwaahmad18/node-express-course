// installing packages tutorial (local dependencies)

const _ = require ("lodash")//this _ is commonly used as a varibale name to packages or dependencies.

const items = [1, [2, [3, [4]]]] //this is called the flatten deep method, located in lodash, makes it possible to return these as flat array.
const newItems = _.flattenDeep(items);// Remember, we used _. to access it the available modules.
console.log(newItems);


