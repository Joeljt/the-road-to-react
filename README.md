# Tips for React Beginners

- A React component decalred as a function must have a catipalized name, otherwize that function would not be treated as a component.

- Everything inside a function component would be run mutilple times during re-renders, so define variables outside the component to avoid re-defines.

- JSX replaces several vanilla HTML attributes to better working with React, and the camelCase naming is used as well, such as `htmlFor`、`onClick` or `className`, etc.
But these replacements are development-only, all of these attributes get translated back to their native variant.

- 