
// const title = 'Reac  dad'

// const welcome = {
//   greeting: 'Hey',
//   title: 'React'
// }

function getTitle(title) {
  return title;
}

function App() {

  // Everything in the function will be called during every render
  // so define variables outside of the component to avoid re-deines

  return (
    <div>
      {/* <h1>{`hello ${title}`}</h1> */}
      {/* <h1>hello {title}</h1> */}

      {/* <h1>{welcome.greeting}, {welcome.title}</h1> */}

      <h1>{getTitle('hello?')}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App
