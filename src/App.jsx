/* eslint-disable react/prop-types */
import React from "react";

const App = () => {

  const stories = [
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

  let [searchTerm, setSearchTerm] = React.useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // filter the story list in the parent component, and pass the filterd result directly
  // don't bother passing the `searchTerm` down to the List component
  // It's not neccessary to do that
  const searchedStories = stories.filter(story => story.title.includes(searchTerm));

  return ( 
    <div>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
}

const Search = (props) => {
  return (
    <>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text" 
        value={props.searchTerm} 
        onChange={props.onSearch}
      />
      <p>
        Searching for { props.searchTerm }
      </p>
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
