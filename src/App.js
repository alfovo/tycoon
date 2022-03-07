import logo from "./logo.svg";
import "./App.css";
import Game from "features/tic-tac-toe/components/Game";
import Header from "components/Header";
import Comments from "features/comments/components/Comments";
import Footer from "components/Footer";
import COMMENTS from "./commentData";
import CommentForm from "features/comments/components/CommentForm";

function App() {
  const user = {
    firstName: "Beach",
    lastName: "Boy",
  };

  return (
    <div className="App">
      <Header user={user} />
      <Game />
      <Comments comments={COMMENTS} />
      <CommentForm />
      {/* <Footer name={user.firstName} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
