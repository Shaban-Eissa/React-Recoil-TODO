import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostCreate } from "./components/PostCreate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3 style={{ fontFamily: "sans-serif" }}>React + Recoil 😍</h3>

        <PostCreate />
        <PostList />
      </header>
    </div>
  );
}

export default App;
