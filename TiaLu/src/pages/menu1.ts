import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}

export const Container = styled.nav<MenuProps>`
  background-color: #BFDDF3;
  border-radius: 1.25rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-family: 'Cherry Swash', 'serif', 'Roboto', 'sans-serif';
  padding: 0px;
  justify-content: center;
  position: relative; /* Adiciona posição relativa para usar com o ul */
  

  ul {
    display: flex;
    flex-direction: ${(props) => (props.isOpen ? 'column' : 'row')};
    gap: 2rem;
    padding-left: 0px;
    list-style-type: none;
    align-items: center; /* Centraliza verticalmente os itens do menu */
    justify-content: center; /* Centraliza horizontalmente os itens do menu */
    margin: 0px;
  }

  li {
    list-style-type: none;
    margin: 0px 10px;
  }

  a {
    color: #333;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: #c3b0ca;
  }

  @media (max-width: 1056px) {
    justify-content: flex-end;
    margin-top: 0;
    border-radius: 0;

    ul {
      flex-direction: column;
      position: absolute;
      top: 2.5rem;
      left: 0px;
      padding-left: 0px;
      width: 100%;
      background-color: #5e3484;
    }

    li {
      padding: 0.5rem;
    }
  }
  h{
    color: #BFCAF3;
    width: 100%; 
  }
`;

export const ContentMobile = styled.div`
  display: none;
  width:100%;
  @media (max-width: 1056px) {
    display: flex;
  }
`;

