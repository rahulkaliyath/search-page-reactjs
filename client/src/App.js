import React from 'react';
import SearchBar from './components/search-bar/searchBar';
import Container from 'react-bootstrap/Container';

import ResultOverview from './components/result-overview/result-overview';
import './App.css';

class App extends React.Component{
  
  render(){
    return(
      <div>
        
        <Container>
        <SearchBar />
        <ResultOverview />
</Container>
      </div>
    )
  }
}

export default App;
