import React from "react";
import "../Global/style.css"

export const Footer = ()=>{
    return(
        <footer id="footer">
			<div class="footer-content">
				<img src="img/logo.png" alt="" class="logo" />
				<ul class="footer-menu">
					<p>Empresa</p>
					<li class="footer-menu-item">
						Sobre
					</li>
					<li class="footer-menu-item">
						Empregos
					</li>
					<li class="footer-menu-item">
						For the record
					</li>
				</ul>

				<ul class="footer-menu">
					<p>Comunidades</p>
					<li class="footer-menu-item">
						Para Artistas
					</li>
					<li class="footer-menu-item">
						Desenvolvedores
					</li>
					<li class="footer-menu-item">
						Marcas
					</li>
					<li class="footer-menu-item">
						Investidores
					</li>
					<li class="footer-menu-item">
						Fornecedores
					</li>
				</ul>

				<ul class="footer-menu">
					<p>Links úteis</p>
					<li class="footer-menu-item">
						Ajuda
					</li>
					<li class="footer-menu-item">
						Player da Web
					</li>
					<li class="footer-menu-item">
						Aplicativo móvel grátis
					</li>
				</ul>

				<div class="socials">
					<i class="fab fa-instagram"></i>
					<i class="fab fa-twitter"></i>
					<i class="fab fa-facebook-f"></i>
				</div>
			</div>
			<div class="footer-info">
				<ul class="footer-info-items">
					<li class="footer-info-item">Legal</li>
					<li class="footer-info-item">Centro de Privacidade</li>
					<li class="footer-info-item">Política de privacidade</li>
					<li class="footer-info-item">Cookies</li>
					<li class="footer-info-item">Sobre anúncios</li>
				</ul>

				<div class="rights">
					<div class="country">
						<p>Brasil</p>
						<img src="img/brazil.png" alt="" class="brazil-flag" />
					</div>
					<p>&copy; Spotify, 2022 <a href="https://github.com/walisson27">Walisson Souza</a> </p>
				</div>
			</div>
		</footer>
    )
}