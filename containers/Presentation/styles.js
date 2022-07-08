import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #878e88;
`;

export const MenuContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
`;

export const MenuWave = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 12%;
    padding: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${({background}) => background};
    transition: 500ms;
`;

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const NavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
`;

export const NavItem = styled.div`
    font-size: ${({special}) => special ? "36px" : "20px"};
    color: #fff;
`;