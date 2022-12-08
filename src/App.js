import "./App.css";
import Die from "./components/Die";

function App() {
  const dieNumArr = [];
  for (let i = 0; i < 6; i++) {
    dieNumArr.push(Math.floor(Math.random() * 6));
  }
  console.log(dieNumArr)
  return (
    <main className="App w-full h-screen flex justify-center items-center bg-slate-800">
      <div className="innerBox bg-slate-200 h-1/2 p-3 flex flex-col justify-center items-center rounded-lg">
        <div className="grid gap-6 grid-cols-5">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          {/* end of first col */}
          <Die value={6} />
          <Die value={4} />
          <Die value={1} />
          <Die value={2} />
          <Die value={4} />
        </div>
      </div>
    </main>
  );
}

export default App;
