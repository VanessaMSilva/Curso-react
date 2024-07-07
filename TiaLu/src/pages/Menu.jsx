//import "./menu.css"
import { useEffect, useState } from "react";
import {Container, ContentMobile} from "./menu1";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

export function Menu(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    const handleResize = () => {
        if(window.innerWidth > 1056 && !menuOpen){
            setMenuOpen(true)
        }

        if(window.innerWidth < 1056 && menuOpen){
            setMenuOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    
    }, [menuOpen])
    return(
        <Container>
            <ContentMobile onClick={toggleMenu}>
                {menuOpen ? <IoCloseSharp color="white"/> : <TiThMenu color="white"/> } 
            </ContentMobile>
            {menuOpen || window.innerWidth > 1056?  
                <ul>
                    <li><a href="/">Ínicio</a></li>
                    <li><a href="/produto">Produto</a></li>
                    <li><a href="/contato">Cliente</a></li>
                    <li><a href="/">Venda</a></li>
                    <li><a href="/">Relátorio</a></li>
                    <li><a href="/">Horário picos</a></li>
                    <li><a href="/">Cardapio</a></li>
                    <li><a href="/">Sobre</a></li>
                </ul>
                
                : 
                <></>
            }
            
        </Container>
    );
}

export default Menu;