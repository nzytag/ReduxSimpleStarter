import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';



//Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
    <SearchBar />
    </div>
    );
}
//This will put the component's generated HTML and put it on the page (dom)

ReactDOM.render(<App />,document.querySelector('.container') );