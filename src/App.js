import React, { Component } from "react";
import Header from "./components/Header";
import Player from "./components/Player";

class App extends Component {
	state = {
		players: [
			{
				name: "Guil",
				score: 0,
				id: 1
			},
			{
				name: "Treasure",
				score: 0,
				id: 2
			},
			{
				name: "Ashley",
				score: 0,
				id: 3
			},
			{
				name: "James",
				score: 0,
				id: 4
			}
		]
	};

	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(p => p.id !== id)
			};
		});
	};

	render() {
		return (
			<div className="scoreboard">
				<Header
					title="My Scoreboard"
					totalPlayers={this.state.players.length}
				/>

				{this.state.players.map(player => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
