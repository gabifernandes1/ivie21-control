import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
	const [convidados, setConvidados] = useState([]);
	async function getVou() {
		let result = await axios.get(`${process.env.REACT_APP_URL7}`);
		setConvidados(result.data);
	}
	useEffect(() => {
		getVou();
	}, []);
	return (
		<div className="App">
			<div id="div">
				<p id="label">VOU</p>
				{convidados.map((convidado) => {
					return (
						<div>{convidado.vou == 'S' ? <p> {convidado.nome}</p> : ''}</div>
					);
				})}
			</div>

			<div id="div">
				<p id="label"> NÃO VOU</p>
				{convidados.map((convidado) => {
					return (
						<div>{convidado.vou == 'N' ? <p> {convidado.nome}</p> : ''}</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
