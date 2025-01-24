//web api's:- setTimeout, DOM API's, fetch(), Local Storage, Console, Location

// Event loop's job is to continuously monitor Call stack and callback queue so once the call stack is empty it adds callbacks in the callstack

// Microtask queue is a higher priority queue
// Promises and mutation observer are kept in Microtask queue

//All other callbacks is kept in a Callback queue

// Starvation can happen because if microtask creates its own microtask and so on callback in a callbackqueue dont get a chance of execution for a long time