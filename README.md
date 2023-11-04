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

### List in React

- When composing UI component with React and JSX, we just use vanilla HTML and JS and that's all. No magic directive, no templating syntax, just JavaScript.
- Use Array#map to obtain a list of JSX, and every list item should have a unique identifier, which is used for React to identify different element to apply changes efficiently.
    - https://www.robinwieruch.de/react-list-key/
- Use the index as an item key for the last resort, as it may comes with lots of unexpected behaviors.
- returning null in React to render nothing at that moment or position

### React element and instantiation

- `Decalaring a React component` is just the declaration of the function or the class
- After the declaration, we could use this component in our JSX, and that make the component instantiated, and React will render it as a `React element`
- And that React element is also called `the instance of the React component`.
- Although we just use a component in the JSX using a angle brackets (e.g. <Greeting />), but React is using React.createElement API to create React element for us under the hood.
- Always use angle brackets to render a React component, and NEVER call it with parenthesis if you're declaring a function component.
    - https://www.robinwieruch.de/react-element-component/

### StrictMode Component
- use StrictMode to help you find bugs more easily and early
- component wrapped by strict mode will run another render to find redundant re-renders, and try to make your component pure enough to ignore the extra rendering triggered by strict mode component
- hooks inside a strict mode component hierachy will run an extra setup-cleanup procedure to help you find missing cleanup
- using of legacy API would get warnings inside a strict mode component

### Handler function
- Declare a function to handle the DOM event is very common in React, and those functions are called handler functions
- the event will be passed to the handler function, and that event is synthetic, not the original DOM event
- React has handled all the preventDefault works for developers under the hood
- use `event.nativeEvent` to get the original DOM event if that's your case

