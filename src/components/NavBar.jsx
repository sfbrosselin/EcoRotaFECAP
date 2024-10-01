import styled from "styled-components"
import { Link } from "react-router-dom"

const NavContainer = styled.nav`
    display: flex;
    gap: 1.1vw;
    align-items: center;
    margin-right: 1vw;
    margin-block: 1vh;
    font-size: 5.5vh;
    cursor:pointer;
`
const NavModal = styled.div`
    color: #fff6de;
    display: flex;
    &:hover{
        color:#071f19;
        transition: 0.2s ease-in-out
    }
`
const NavArrow = styled.nav`
    font-size: 2.8vh;
    font-weight: regular;
    display: flex;
    align-items:center;
`
const Profile = styled(Link)`
    display: flex;
    color: #FFF6DE;
    text-decoration:none;
    &:hover{
        color: #071f19;
        transition: 0.15s ease-in;
    }
`

export default function NavBar(props){
    const {handleOpenModal} = props
    return(
        <NavContainer>
            <NavModal onClick={handleOpenModal}>
                <NavArrow className="fa-solid fa-chevron-down"></NavArrow>
                <i className="fa-solid fa-signs-post"></i>
            </NavModal>
            <Profile to='/profile' className="fa-solid fa-user" ></Profile>
        </NavContainer>
        
    )
}