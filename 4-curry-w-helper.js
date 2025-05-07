const curry = (fn) =>
  function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...rest) => curried(...args, ...rest);
  };

const volume = (l, w, h) => l * w * h;
const curriedVolume = curry(volume);
console.log(curriedVolume(2)(3)(4)); // 24
