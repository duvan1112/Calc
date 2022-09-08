import './App.css';
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val.trimEnd());
    };

    const calcularResultado=()=>{
        setInput(evaluate(input));
    }

    return (
        <div className='App'>

            <div className='top'>
                <h1>Calculadora</h1>
            </div>

            <div className='calc-wrapper'>
                <Pantalla input={input}/>

                <div className='row'>
                    <BotonClear manejarClear={()=> setInput('')}>CC</BotonClear>
                    <BotonClear manejarClear={()=>setInput(input.substring(0,input.length-1))}>DEL</BotonClear>
                </div>

                <div className='row'>
                    <Boton manejarClick={agregarInput}>1 </Boton>
                    <Boton manejarClick={agregarInput}>2</Boton>
                    <Boton manejarClick={agregarInput}>3</Boton>
                    <Boton manejarClick={agregarInput}>+</Boton>
                </div>
                <div className='row'>
                    <Boton manejarClick={agregarInput}>4</Boton>
                    <Boton manejarClick={agregarInput}>5</Boton>
                    <Boton manejarClick={agregarInput}>6</Boton>
                    <Boton manejarClick={agregarInput}>-</Boton>
                </div>
                <div className='row'>
                    <Boton manejarClick={agregarInput}>7</Boton>
                    <Boton manejarClick={agregarInput}>8</Boton>
                    <Boton manejarClick={agregarInput}>9</Boton>
                    <Boton manejarClick={agregarInput}>*</Boton>
                </div>
                <div className='row'>
                    <Boton manejarClick={calcularResultado}>=</Boton>
                    <Boton manejarClick={agregarInput}>0</Boton>
                    <Boton manejarClick={agregarInput}>.</Boton>
                    <Boton manejarClick={agregarInput}>/</Boton>
                </div>

            </div>

        </div>
    );
}

export default App;
