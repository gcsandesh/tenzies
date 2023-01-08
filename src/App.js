import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die";

function App() {
	const [dice, setDice] = React.useState(getNewDice());

	function rollDie() {
		setDice((oldDice) =>
			oldDice.map((die) => (die.isHeld ? die : generateDie()))
		);
	}

	function holdDie(dieId) {
		const heldDie = dice.find((die) => die.id === dieId);
		heldDie.isHeld = !heldDie.isHeld;

		setDice([...dice]);
	}

	function getNewDice() {
		const dieNumArr = [];
		for (let i = 0; i < 10; i++) {
			dieNumArr.push(generateDie()); //random from 0 to 5, ceiled so that 1 to 6
		}
		return dieNumArr;
	}

	function generateDie() {
		return {
			id: nanoid(),
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
		};
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
			<div className="bg-[#f5f5f5] h-3/4 max-h-96 max-w-lg p-6 m-5 flex flex-col justify-around items-center gap-4 rounded-lg">
				<h1 className="text-2xl font-semibold">Tenzies</h1>
				<p className="text-center">
					Roll until all dice are same. <br />
					Click each die to freeze it at its current value between rolls.
				</p>
				{/* numbers container */}
				<div className="grid gap-6 grid-cols-5">{diceArr}</div>
				<button
					// onClick={() => setDice(getNewDice())}
					onClick={rollDie}
					className="bg-[#5035ff] rounded-md px-4 py-2 text-white font-semibold shadow-md active:shadow-black active:shadow-inner "
				>
					Roll
				</button>
			</div>
		</main>
	);
}

export default App;
