
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import DataGrid from './Components/DataGrid';
import Footer from './Components/Footer';
import DataGridOverView from './Components/DataGridOverView';
function App() {
  console.log("Hello")
  return (
  <div className="App">
 
 <Header></Header>
<SearchBar></SearchBar>
<DataGridOverView></DataGridOverView>
<Footer></Footer>


</div>
  
  );
}

export default App;
