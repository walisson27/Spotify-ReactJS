import React from "react";
import "../Global/style.css"

export const Navbar = () => {
    return(
    <navbar id="navbar">
    <div class="navbar-container">
        <img src="./img/logo.png" alt="" class="logo" />
        <ul class="navbar-items">
            <li class="navbar-item">Premium</li>
            <li class="navbar-item">Ajuda</li>
            <li class="navbar-item">Baixar</li>
            <li class="navbar-item">Inscrever-se</li>
            <li class="navbar-item">Entrar</li>
        </ul>
    </div>
</navbar>
)
}