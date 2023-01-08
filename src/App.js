import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
	const [dice, setDice] = React.useState(getNewDice());
	function getNewDice() {
		const dieNumArr = [];
		for (let i = 0; i < 10; i++) {
			dieNumArr.push({ value: Math.ceil(Math.random() * 6), isHeld: false }); //random from 0 to 5, ceiled so that 1 to 6
		}
		// console.log(dieNumArr);
		return dieNumArr;
	}
	const diceArr = dice.map((die) => {
		return <Die value={die.value} />;
	});
	console.log(dice);
	return (
		// app
		<main className="App w-full h-screen flex justify-center items-center bg-[#0b2434]">
			{/* inside white box */}
			<div className="bg-[#f5f5f5] h-1/2 max-h-96 p-6 flex flex-col justify-center items-center gap-4 rounded-lg">
				{/* numbers container */}
				<div className="grid gap-6 grid-cols-5">{diceArr}</div>
				<button
					onClick={() => setDice(getNewDice())}
					className="bg-[#5035ff] rounded-md px-4 py-2 text-white font-semibold shadow-md active:shadow-black active:shadow-inner "
				>
					Roll
				</button>
			</div>
		</main>
	);
}

export default App;
