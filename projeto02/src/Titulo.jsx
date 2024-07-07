import { useState } from "react";
function Titulo({cor, nome1, paragrafo}){
    const [texto, setTexto] = useState("Um titulo no estado inicial");
    const [inputText, setInputText] = useState("");
    let nome = "Dimitri";
    const urli = "https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png";
    const soma = 10 +10;
    function clicou(){
        setTexto(inputText);
    }
    return (<div>
        <h1 style={{color: cor}}>{texto}</h1>
        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text"/>
        <button onClick={clicou}>Mudar com input</button>

        <button onClick={()=>{setTexto("Mudei via botao")}}>Mudar</button>
        <h1 style={{color: cor}}>Oi eu sou o {nome}</h1>
        <p>Soma é igual a {soma}</p>
        <img width={150} src={urli}/>
        <h2>Eu sou a {nome1 ? nome1: "Fulano"}</h2>
        {paragrafo ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur fugiat sapiente tempora magnam. Fugiat, pariatur doloribus illo molestias recusandae neque saepe explicabo dignissimos, laboriosam ratione velit asperiores ullam voluptate quia.</p>
        : <p>nada</p>}
    </div>)
}

export default Titulo