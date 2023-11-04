/* eslint-disable react/prop-types */
const App = () => {

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

  return ( 
    <div>
      <Search />
      <hr />
      <List list={list}/>
    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event)
    console.log(event.target.value)
  }
  return (
    <>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    </>
  );
}

const List = ({ list }) => (
  <ul>
    {list.map((item) => <Item key={item.objectID} item={item}/>)}
  </ul>
);

const Item = ({ item }) => {
  return (
    <li key={item.objectID}>
    <span>
      <a href={item.title}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );
}

export default App
