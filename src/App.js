import Counter from "./components/counter";
import Article from "./components/article";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Article />

      <div className="reactions">
        <div className="like">
          Like:
          <Counter start={0} />
        </div>
        
        <div className="dislike">
          Dislike:
          <Counter start={0} />
        </div>
      </div>
    </div>
  );
}