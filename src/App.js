import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [convidados, setConvidados] = useState([]);
  const [contagemvou, setcontvou] = useState(0);
  const [contagemnvou, setcontnvou] = useState(0);

  async function getVou() {
    let result = await axios.get(`${process.env.REACT_APP_URL7}`);
    setConvidados(result.data);
    let vou = 0;
    let nvou = 0;
    for (let i in result.data) {
      if (result.data[i].vou == 'S') {
        vou = vou + 1;
      } else if (result.data[i].vou == 'N') {
        nvou = nvou + 1;
      }
    }
    setcontvou(vou);
    setcontnvou(nvou);
  }
  useEffect(() => {
    getVou();
  }, []);
  let contvou = 0;
  let contnvou = 0;
  return (
    <div className="App">
      <div id="div1">
        <p id="label">VOU {contagemvou}</p>

        {convidados.map((convidado, index) => {
          if (convidado.vou == 'S') {
            contvou = contvou + 1;
            return (
              <div key={index}>
                <p>
                  {contvou}- {convidado.nome}
                </p>
              </div>
            );
          }
        })}
      </div>

      <div id="div2">
        <p id="label"> NÃO VOU {contagemnvou}</p>
        {convidados.map((convidado, index) => {
          if (convidado.vou == 'N') {
            contnvou = contnvou + 1;
            return (
              <div key={index}>
                <p>
                  {contnvou}- {convidado.nome}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
