import './App.css';
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import {useState} from "react";

function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val);
    };

    return (
        <div className='App'>

            <div className='top'>
                <h1>Calculadora</h1>
            </div>

            <div className='calc-wrapper'>
                <Pantalla input={input}/>

                <div className='row'>
                    <BotonClear>CC</BotonClear>
                    <BotonClear>DEL</BotonClear>
                </div>

                <div className='row'>
                    <Boton manejarClick={agregarInput}>1 </Boton>
                    <Boton manejarClick={agregarInput}>2</Boton>
                    <Boton manejarClick={agregarInput}>3</Boton>
                    <Boton manejarClick={agregarInput}>+</Boton>
                </div>
                <div className='row'>
                    <Boton>4</Boton>
                    <Boton>5</Boton>
                    <Boton>6</Boton>
                    <Boton>-</Boton>
                </div>
                <div className='row'>
                    <Boton>7</Boton>
                    <Boton>8</Boton>
                    <Boton>9</Boton>
                    <Boton>*</Boton>
                </div>
                <div className='row'>
                    <Boton>=</Boton>
                    <Boton>0</Boton>
                    <Boton>.</Boton>
                    <Boton>/</Boton>
                </div>

            </div>

        </div>
    );
}

export default App;
