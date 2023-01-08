import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die";

function App() {
	const [dice, setDice] = React.useState(getNewDice());

	function holdDie(dieId) {
		// dice.map((die) => {
		// 	if (die.id === dieId) {
		// 		die.isHeld = !die.isHeld;
		// 	}
		// });
		const heldDie = dice.find((die) => die.id === dieId);
		heldDie.isHeld = !heldDie.isHeld;

		setDice([...dice]);
	}

	function getNewDice() {
		const dieNumArr = [];
		for (let i = 0; i < 10; i++) {
			dieNumArr.push({
				id: nanoid(),
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
			}); //random from 0 to 5, ceiled so that 1 to 6
		}
		return dieNumArr;
	}

	const diceArr = dice.map((die) => {
		return (
			<Die
				key={die.id}
				value={die.value}
				isHeld={die.isHeld}
				holdDie={() => holdDie(die.id)}
			/>
		);
	});

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
