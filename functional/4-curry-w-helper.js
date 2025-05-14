const curry = (fn) =>
  function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...rest) => curried(...args, ...rest);
  };

const filterUsers = (role, users) => {
  return users.filter((user) => user.role === role);
};

const filterByRole = curry(filterUsers);

// Create specific role filters
const getAdmins = filterByRole("admin");
const getEditors = filterByRole("editor");

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Charlie", role: "viewer" },
  { id: 4, name: "Dana", role: "admin" },
  { id: 5, name: "Eve", role: "editor" },
  { id: 6, name: "Frank", role: "viewer" },
];

// Use it
const admins = getAdmins(users);
const editors = getEditors(users);

console.log("Admins: ", getAdmins(users));
console.log("Editors: ", getEditors(users));
