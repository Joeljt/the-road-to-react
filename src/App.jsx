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

  let [searchTerm, setSearchTerm] = useStorageState('search', 'React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // filter the story list in the parent component, and pass the filterd result directly
  // don't bother passing the `searchTerm` down to the List component
  // It's not neccessary to do that
  const searchedStories = stories.filter(story => { 
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const [isToggle, { handleToggle }] = useBoolean(false)

  return ( 
    <div>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
      <hr />
      <div>
        <button type="button" onClick={handleToggle}>
          {isToggle + ""}
        </button>
      </div>
    </div>
  );
}

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

const useBoolean = (initialState) => {
  const [state, setState] = React.useState(initialState);
  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);
  return [
    state,
    {
      handleTrue,
      handleFalse,
      handleToggle
    }
  ];
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
    {list.map(({ objectID, ...rest }) => <Item key={objectID} {...rest}/>)}
  </ul>
);

const Item = ({
  title, 
  url,
  author,
  num_comments,
  points
}) => {
  return (
    <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
  );
}

export default App
