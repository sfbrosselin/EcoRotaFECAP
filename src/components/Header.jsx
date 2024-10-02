
import NavBar from "./NavBar";
import styled from "styled-components";
import NavBarModal from "./NavBarModal";
import { useState } from "react";

const HeaderContainer = styled.header`
    background-color:#394130;
    color: #fff6de;
    display: flex;
    justify-content:space-between;
    align-items: center;
    min-height: 9vh;
    padding-inline: 1vw;
`
const Logo = styled.div`
    font-size: 7.5vh;
    margin-left: 1vw;
    cursor:pointer;
    &:hover{
        color:#071f19;
        transition: 0.10s ease;
    }
`

export default function Header(){
    const [openModal, setOpenModal] = useState(false)
    function handleOpenModal(){
        setOpenModal(!openModal)
        
    }
    return(
        <>
            <HeaderContainer>
                <Logo className="fa-solid fa-route"></Logo>
                <NavBar handleOpenModal={handleOpenModal}/>
            </HeaderContainer>
            {openModal && (<NavBarModal/>
            )}
        </>

    )
}