










import styled from "styled-components";
import { default as But } from '../components/buttons/Buttons.jsx';
import { Link, useLocation, NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 192px;
    width: 100vw;
    height: 66.5px;
    margin: auto;

    @media (min-width: 768px) {
        height: 192px;
    }

    .container{
        background-color: var(--white);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;

        @media (min-width: 768px) {
            padding: 45px 100px 29px 100px;
        }
        
        .carrinho, .out-search, nav.links, .fundo, #menu-sidebar, #menu-sidebar + label, .digital-logo, .search-buy{
            z-index: 4;
        }

        .fundo{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 66.5px;
            background-color: inherit;

            @media (min-width: 768px) {
                height: 192px;
            }
        }

        .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        background-color: rgba(31, 31, 31, 0.4);
        opacity: 0;
        visibility: hidden;
        transition-duration: 500ms;
        }

        &:has(#menu-sidebar:checked){
            .overlay {
                opacity: 1;
                visibility: visible;
            }
        }

        & #menu-sidebar {
            display: none;
            visibility: hidden;
        }

        & label[for="menu-sidebar"] {
            display: flex;
            width: 24px;
            height: 24px;

            & img {
                margin: 0;
                width: 24px;
                height: 24px;
            }

            @media (min-width: 768px) {
                display: none;
            }
        }

        & #menu-sidebar:checked ~ .links{
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
        }
            
        & .links{
            visibility: hidden;
            z-index: 3;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 66.5px;
            left: 0px;
            background-color: var(--white);
            height: calc(100vh - 66.5px);
            width: 308px;
            padding: 30px;
            box-shadow: 3px 2px 5px rgba(255, 255, 255, 0.2);
            z-index: 5;
            transition: all 500ms;
            transform: translateX(-70%);
            opacity: 0;

            & p{
                margin: 0 0 20px 0;
                color: var(--dark-gray-2);
            }
    
            & nav{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                height: 100%;
                gap: 10px;

                & a {
                    color: var(--dark-gray-3);
                    text-decoration: none;
    
                    &.active {
                        color: var(--primary);
                    }
    
                    &:not(.active)::after {
                        content: "";
                        display: block;
                        border-radius: 2px;
                        width: 0%;
                        height: 2px;
                        margin-top: 5px;
                        background-color: transparent;
                        transition-duration: 500ms;
                    }
    
                    &.active::after {
                        content: "";
                        display: block;
                        border-radius: 2px;
                        inline-size: 100%;
                        block-size: 2px;
                        margin-block-start: 5px;
                        background-color: var(--primary);
                        transition-duration: 500ms;
                    }
                }
            }

            &::after{
                content: "";
                width: calc(100% - 60px);
                height: 1px;
                background-color: var(--light-gray-2);
                position: absolute;
                bottom: calc(30px + 85px + 20px);
            }
            & .but-link{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 17px;

                & button {
                    width: 100%;
                    min-height: 40px;
                    position: relative;
                }

                & .cadastre{
                    color: var(--dark-gray-2);
                }
            }

            @media (min-width: 768px) {
                z-index: 4;
                flex-direction: row;
                opacity: 1;
                visibility: visible;
                background-color: transparent;
                box-shadow: none;
                transform: none;
                position: static;
                align-self: self-start;
                height: auto;
                padding: 0;
                height: 29px;
                width: 424px;

                p {
                    display: none;
                }

                nav {
                    flex-direction: row;
                    gap: 32px;
                    align-items: center;
                    height: 25px;

                    & a {
                        color: var(--dark-gray-3);
                        text-decoration: none;
                        /* font-size: 17.5px; */
                        line-height: 25px;
                    }
                }

                &:after {
                    display: none;
                }

                .but-link {
                    display: none;
                }
            }
        }

        & .digital-logo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 138px;
            height: 24px;
            margin-left: 70px;
    
            & img {
                margin: 2.73px 0 3.27px 0;
                width: 18px;
                height: 18px;
    
                @media (min-width: 768px) {
                    margin-left: auto;
                    width: 33px;
                    height: 33px;
                    margin: 5px 0 6px 0;
                }
            }
    
            & h1 {
                margin: 0;
                width: auto;
                font-size: 19.85px;
                line-height: 24px;
                font-weight: 600;
                letter-spacing: -0.01rem;
                color: var(--primary);
    
                @media (min-width: 768px) {
                    font-size: 36px;
                    line-height: 44px;
                }
            }
            @media (min-width: 768px) {
                height: 44px;
                width: 253px;
                margin: 0;
            }
        }

        & .out-search{
            height: 20px;
            width: 20px;
            transition-duration: 500ms;
            margin-left: 28px;

            & img{
                width: 20px;
                height: 20px;
            }
        }



        & #search-buy:checked + .out-search > img{
            filter: invert(20%) sepia(62%) saturate(3928%) hue-rotate(315deg) brightness(85%) contrast(91%);
        }

        & #search-buy{
            display: none;
        }

        & .search-buy, & #menu-sidebar:checked {
            display: flex;
            position: absolute;
            top: -13.5px;
            left: 0;
            width: 100vw;
            height: 80px;
            justify-content: space-between;
            z-index: 1;
            transition-duration: 300ms;

            & .MenuTopBarSearch{
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                background-color: var(--white);
                justify-content: flex-end;
                padding: 0 40px 20px 20px;
                
                & input{
                    color: var(--dark-gray-3);
                    width: 100%;
                    height: 60px;
                    padding: 16px 20px;
                    border: 0;
                    border-radius: 8px;
                    background-color: rgba(71, 71, 71, 0.4);

                    &::placeholder{
                        color: var(--dark-gray-3);
                    }

                    &:focus{
                        outline: none;
                    }
                }

                & a{
                    position: absolute;
                    margin-right: 20px;
                    height: 24px;
                    cursor: pointer;
                    justify-content: flex-end;

                    & img{
                        opacity: 0.5;
                    }
                }
            }
        }

        & #search-buy:checked + * + .search-buy{
            transform: translateY(80px);
        }
    
        .carrinho{
            position: relative;

            & #carrinho {
                display: none;
            }

            & span.p-badge{
                clip-path: circle(8.5px at center);
                display: flex;
                position: absolute;
                top: -5px;
                right: -11px;
                background-color: var(--error);
                height: 17px;
                width: 17px;
                color: var(--white);
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

const DigitalLogo = () => {
    return (
        <div className="digital-logo">
            <img src="Group.svg" />
            <h1>Digital Store</h1>
        </div>
    );
}

const Input = () => {
    return (
        <div className="input-drop">
            <input type="text" placeholder="Pesquisar produto..." />
        </div>
    )
}


const Cadastre = () => {
    return (
        <div className="cadastre">
            <Link className="text-small" to="/" >Cadastre-se</Link>
            {/* <Link className="text-small" to="end-point de cadastro simples" */}
        </div>
    )
}

const Links = () => {
    return (
        <div className="links">
            <p className="text-small bold">Páginas</p>

            <nav>
                <NavLink to="/" className={(a) => `${whereNavLink(a)} text-small`} >Home</NavLink>
                <NavLink to="/produtos" className={(a) => `${whereNavLink(a)} text-small`} >Produtos</NavLink>
                <NavLink to="/categorias" className={(a) => `${whereNavLink(a)} text-small`} >Categorias</NavLink>
                <NavLink to="/meus-pedidos" className={(a) => `${whereNavLink(a)} text-small`} >Meus Pedidos</NavLink>
            </nav>
            <div className="but-link">
                <But
                    className="text-extra-small bold"
                    label="Comprar"
                    buttonType="primary-button"
                />

                <Link className="cadastre text-small" to="/" >Cadastre-se</Link>
            </div>

        </div>
    )
}

const Filters = () => {
    return (
        <>

        </>
    )
}

const Pages = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/pesquisa" ? <Filters /> : <Links />}
        </>
    )
}

const whereNavLink = ({ isActive, isPending }) => {
    if (isPending) {
        return "pending"
    } else if (isActive) {
        return "active"
    } else {
        return ""
    }
};

const Carrin = () => {
    return (
        <label className="carrinho">
            <input type="checkbox" id="carrinho" />
            <img src="Buy.svg" />
            <span className="p-badge">2</span>
        </label>
    )

}

const Header = () => {

    return (
        <HeaderContainer>
            <div className="container">
                <div className="fundo"></div>
                <label className="overlay" htmlFor="menu-sidebar"></label>
                <input type="checkbox" id="menu-sidebar" />
                <label htmlFor="menu-sidebar">
                    <img src="Menu.svg" />
                </label>
                <Pages />
                <DigitalLogo />

                <input type="checkbox" id="search-buy" />
                <label className="out-search" htmlFor="search-buy">
                    <img src="Search.svg" />
                </label>

                {/* <Links /> */}

                <div className="search-buy">
                    <div className="MenuTopBarSearch">
                        <input type="text" className="text-small" placeholder="Pesquisar produto..." />
                        <Link to="/">
                            <img src="Search.svg" />
                        </Link>
                    </div>
                </div>

                <Carrin />
            </div>
        </HeaderContainer>
    );
};

export default Header;