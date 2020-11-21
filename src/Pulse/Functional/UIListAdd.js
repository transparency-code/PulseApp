//https://x-team.com/blog/functional-programming-primer/
//The number of arguments in a function is known as arity
//Functions with single arity are unary functions, 2 arity makes binary functions, 3 arity to ternary functions, and more than 3 arity will give a n-ary function.
//functional that return another function
//A function that can accept another function (a callback) as a parameter is a higher-order function
//https://eloquentjavascript.net/05_higher_order.html


/**
 * 
 * @param {function} addFunc 
 */
export default function UIListAdd(addFunc, addNotification) {


        return function addFunc(newValue) {
                console.log(newValue)
                const response = addFunc(newValue, addNotification)
                return response
        }
    
}

