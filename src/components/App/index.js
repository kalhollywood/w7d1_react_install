import "./App.css";
import List from "../List";
import ListItem from "../ListItem";

function App() {
  return (
    <main className="App">
      <List>
        <ListItem text="Test One" />
        <ListItem text="Test Two" />
        <ListItem text="Test Three" />
      </List>
    </main>
  );
}

export default App;
