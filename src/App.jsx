
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function App() {

  // Everything in the function will be called during every render
  // so define variables outside of the component to avoid re-deines

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      {list.map(item => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </span>
          </li>
        )
      })}
    </div>
  );
}

export default App
