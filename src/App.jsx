import './App.css';
import Animal from './Components/004/Animal';

// const bu = 'bubu-bu'; {
//     // return <h2>bubu-bu</h2>
// }

// const animals = [
//     {id: 1, type: 'racoon', animalColor: 'skyblue'},

// ]

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello Props</h1>             
            <Animal type="racoon" />
            <Animal type="cat" />
        </header>
        </div>
    );
} 

export default App;
