# Tips for React Beginners

### Fundamental 
- A React component decalred as a function must have a catipalized name, otherwize that function would not be treated as a component.

- Everything inside a function component would be run mutilple times during re-renders, so define variables outside the component to avoid re-defines.

### JSX is the key

- JSX replaces several vanilla HTML attributes to better working with React, and the camelCase naming is used as well, such as `htmlFor`、`onClick` or `className`, etc.
But these replacements are development-only, all of these attributes get translated back to their native variant.

- More readings
    - https://stackoverflow.com/questions/44931479/compiling-vs-transpiling
    - https://react.dev/learn/writing-markup-with-jsx
    - 

### List in React

- When composing UI component with React and JSX, we just use vanilla HTML and JS and that's all. No magic directive, no templating syntax, just JavaScript.
- Use Array#map to obtain a list of JSX, and every list item should have a unique identifier, which is used for React to identify different element to apply changes efficiently.
    - https://www.robinwieruch.de/react-list-key/
- Use the index as an item key for the last resort, as it may comes with lots of unexpected behaviors.
- returning null in React to render nothing at that moment or position