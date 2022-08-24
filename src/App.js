import './App.css';
import NextUp from './components/NextUp';

function App() {
  return (
    <div className="App">
      <h1> Books </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div> Up Next
        <NextUp/>
        </div>

        <div>Book</div>
        <div>Author</div>
      </div>
    </div>
  );
}

export default App;
