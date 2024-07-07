import Menu from "./Menu";
import tia from '../assets/tialu.png'; // ajuste o caminho conforme a estrutura do seu projeto


function Produto(){
    return(
        <div>
            <Menu/>
            <div className="supre">
                
                <div className="blocos">
                    <div className="crud" id="center">
                        <nav>
                            <ul>
                                <li>Cadastrar</li>
                                <li>Alterar</li>
                                <li>Excluir</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="forms">
                        <form action="">
                            <div>
                                <label htmlFor="Nome">Nome Produto:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="Nome">Codigo de barra:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="Nome">Tamanho:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="Nome">Informações:</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="Nome">Imagem</label>
                                <input type="text" />
                            </div>
                            
                            
                            
                            <button className="Cadastro">Cadastrar</button>
                        </form>
                    </div>
                </div>
                <div className="blocos">
                    <img src={tia} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Produto