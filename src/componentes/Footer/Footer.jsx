import React, { useContext } from "react";
import "./Footer.scss";
import BacoderSmall from "../../assets/img/BacoderSmall";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <footer>
        <div className="footer__box">
          <Link className="page_about" to="/about">
            <p
              className={`footer__box_description ${
                themeContext.theme === "dark" ? "dark" : ""
              }`}
            >
              Luis bñuel, George Méliès Ingmar Bergman, Roman Polanski, David Lynch, Fritz Lang ,F.W.
              Murnau,Stanley Kubrick, Hayao Miyazaki, Akira Kurosawa, Andrei Tarkovsky, François Truffaut Ridley Scott, Pedro
              Almodóvar D.W. Griffith Paul, Thomas Anderson, Alfonso Cuarón, Wong
              Kar-Wai,Alejandro Amenábar,Ang Lee, Tim Burton,
              Krzysztof Kieślowski, Jane Campion, Dalí, Picasso,
              Van Gogh, Rembrant, Diego
              Velazquez, Jan van Eyck, Joan Miró, Goya, Klimt, Marc Chagall, Frida Kahalo, Jackson
              Pollock, Basquiat, Marcel Duchamp, Shin Saimdang, Na Hye-seok : Gatos, café, montaña, brotes, verde,
              limonero, Ipomoea, mañana, viento, gloomy sunday,
              sonrisa, rayos de luz, aire, ola, hola, rocío, viñedo, nubes, puesta de sol, aguacero, agosto, septiembre, una
              rama de árbol, aurora, bosque, tortuga,
              ballena, canción de mar: Cortesía, saludos,
              felicitaciones, comprensión, consideración, gratitud, positivismo,
              empatía, cooperación, responsabilidad, simpatía, generosidad,
              compartir, respeto, cariño, confianza.
            </p>
          </Link>

          <Link className="page_work" to="/Work">
            <BacoderSmall className="bacoder_s" />
          </Link>
        </div>
      </footer>
    </>
  );
}
