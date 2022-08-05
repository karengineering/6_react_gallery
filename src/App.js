// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import apiKey from './config';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      birds: [],
      loading: true
    }
  } 

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('birds');
    this.performSearch();
  }
  
  performSearch = (query = 'cars') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
          if (query === 'cats') {
            this.setState({ cats: res.data.photos.photo, loading: false }); //data already fetched
            // console.log('a');
          } else if (query === 'dogs') {
            this.setState({ dogs: res.data.photos.photo, loading: false }); //data already fetched
          } if (query === 'birds') {
            this.setState({ birds: res.data.photos.photo, loading: false }); //data already fetched
          } else {
            this.setState({ photos: res.data.photos.photo, loading: false, query: query });
          }
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm onSearch={this.performSearch} />      
        <Nav />
   			{
				  (this.state.loading)
					  ? <p> Loading... </p>
					  : <Switch>
                <Route exact path="/" render={() => <PhotoContainer data={this.state.photos} /> } />
                <Route exact path="/cats" render={() => <PhotoContainer data={this.state.cats} query={this.state.cats}/>} />
                <Route exact path="/dogs" render={() => <PhotoContainer data={this.state.dogs} />} />
                <Route exact path="/birds" render={() => <PhotoContainer data={this.state.birds} />} />
                <Route path="/search/:query" render={() => <PhotoContainer data={this.state.photos} query={this.state.query} />} />
                <Route component={NotFound} />
              </Switch>
			  } 
        </div>
      </BrowserRouter>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
