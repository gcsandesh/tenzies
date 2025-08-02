import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

import Die from "./components/Die"

function App() {
	const [dice, setDice] = useState(getNewDice())
	const [tenzies, setTenzies] = useState(false)
	const [rollCount, setRollCount] = useState(0)
	useEffect(() => {
		const heldDice = dice.every((die) => die.isHeld) //true if every dice is held
		const sameDieValue = dice.every((die) => die.value === dice[0].value) //true if every die's value is same
		if (heldDice && sameDieValue) {
			setTenzies(true)
			// console.log("You won!");
		} else setTenzies(false)
		// console.log("roll: ", rollCount);
		return
	}, [dice])

	function rollDie() {
		if (!tenzies) {
			setDice((oldDice) =>
				oldDice.map((die) => (die.isHeld ? die : generateDie()))
			)
			setRollCount((prevCount) => prevCount + 1)
		} else {
			setDice(getNewDice())
			setRollCount(0)
		}
	}

	function holdDie(dieId) {
		const heldDie = dice.find((die) => die.id === dieId)
		heldDie.isHeld = !heldDie.isHeld

		setDice([...dice])
	}

	function getNewDice() {
		const dieNumArr = []
		for (let i = 0; i < 10; i++) {
			dieNumArr.push(generateDie()) //random from 0 to 5, ceiled so that 1 to 6
		}
		return dieNumArr
	}

	function generateDie() {
		return {
			id: nanoid(),
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
		}
	}

	const diceArr = dice.map((die) => {
		return (
			<Die
				key={die.id}
				value={die.value}
				isHeld={die.isHeld}
				holdDie={() => holdDie(die.id)}
			/>
		)
	})

	return (
		// app
		<main className="App w-full h-screen flex justify-center items-center bg-[#0b2434]">
			{tenzies && (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
				/>
			)}
			{/* inside white box */}
			<div className="bg-[#f5f5f5] h-3/4 max-w-lg px-6 py-16 m-5 flex flex-col justify-around items-center gap-4 rounded-lg">
				<h1 className="text-4xl font-black">Tenzies!</h1>
				<p className="text-center">
					Roll until all dice are same.
					<br />
					Click each die to freeze it at its current value between
					rolls.
				</p>
				{/* numbers container */}
				<div className="grid gap-6 grid-cols-5">{diceArr}</div>
				{tenzies && <p>Solved in {rollCount} rolls!</p>}
				<button
					onClick={rollDie}
					className="bg-[#5035ff] rounded-md px-4 py-2 text-white font-semibold shadow-md active:shadow-black active:shadow-inner "
				>
					{tenzies ? "New Game" : "Roll"}
				</button>
			</div>
		</main>
	)
}

export default App
