import React, { useContext } from "react";
import "./About.scss";
import { LanguageContext, ThemeContext } from "../../App";
import { Link } from "react-router-dom";


export default function About() {

  const userData = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);

  const textStyle = {
    color: themeContext.theme === 'dark' ? '#ededdf' : '',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className={themeContext.theme} >

        <section className="about_box" >
          <article className="about__p">
            <h1 style={textStyle}>{userData.language === 'en' ? "I'm glad to meet you." : "Encantada de conocerle."}</h1>
            <p style={textStyle}>{userData.language === 'en' ? "I'm Seokye Lee. Born in Busan, South Korea, I dreamed and wondered since my childhood. I studied in the Art and Design and Cinematography sectors, I managed to work as head of the art direction department for films and series of television until I decided to resume my life after learning the emptiness of the word Success." : "Soy Seokye Lee, nacida en Busan, Corea del Sur, soñaba y curioseaba desde mi infancia. Estudié en los sectores de Arte y diseño y Cinematografía, logré trabajar como jefa del departamento de dirección de arte para películas y series hasta que decidí retomar mi vida tras saber el vacío de la palabra Éxito."}</p>
            <p style={textStyle}>{userData.language === 'en' ?
              "I arrived in Spain and, in love with Spanish, I did a master's degree in film directing, I made two short films, which were selected at La Mostra Valencia. While doing projects as a translator in various Korean companies, she even participated as a quality manager in the 'Artificial Intelligence Learning Data Construction Project promoted by the National Intelligence Agency (NIA) under the Ministry of Science and ICT." : "Llegué a España y, enamorada del castellano, hice un master de dirección de Cine, realicé dos cortometrajes, que fueron seleccionados en La Mostra Valencia. Mientras realizaba proyectos como traductora en varias empresas coreanas, incluso participé como jefa de calidad en el 'Proyecto de Construcción de Datos de Aprendizaje de Inteligencia Artificial' promovido por la Agencia Nacional de Inteligencia (NIA) dependiente del Ministerio de Ciencia y TIC. "} </p>
            <p style={textStyle}>{userData.language === 'en' ? "Graduated with an approved degree in the field of art, I continue to carry out professional training in Design of graphic products, in which I start in HTML and CSS. Interested in the digital world, I continued with the UX Design course: UDEMI user experience and the certified training on Web creation with WordPress. Currently finishing the specialized postgraduate degree in FrontEnd Web Design and Development at the Higher School of Art and Technology to achieve the goal of living from my passion." : "Licenciada con título homologado en la rama de arte, continúo realizando formación profesional en Diseño de productos gráficos, en la que me inicio en HTML y CSS. Interesada en el mundo digital  continuo con el curso de Diseño UX: experiencia de usuario de UDEMI y la formación certificada,  sobre creación Web con WordPress. Actualmente terminando el postgrado especializado en Diseño y Desarrollo Web FrontEnd en la Escuela Superior de Arte y Tecnología para alcanzar el objetivo de vivir de mi pasión."
            }</p>

          </article>

          <article className="about__p_plus">
            <h4 style={textStyle}><sup>01</sup>{userData.language === 'en' ? "Empathy" : "Empatía"}</h4>
            <p style={textStyle}>{userData.language === 'en' ? "With a great ability to put myself in the client's place, I am able to understand their needs and perspectives, to achieve precise, scalable and sustainable business models over time." : "Con una gran capacidad de ponerme en el lugar del cliente soy capaz de entender sus necesidades y perspectivas, para lograr modelos de negocios precisos, escalables y sostenibles en el tiempo."}</p>
            <h4 style={textStyle}><sup>02</sup>{userData.language === 'en' ? "Multidisciplinary" : "Multidisciplinar"}</h4>
            <p style={textStyle}>{userData.language === 'en' ? " I have studied and worked in different areas that require a large amount of diverse skills and knowledge, which allows me to acquire a broad and comprehensive vision of the challenges I face. With a great ability to adapt to different situations and roles that characterize me as a valuable member of any work team." : "He estudiado y trabajado en diferentes áreas que requieren de una gran cantidad de habilidades y conocimientos diversos, lo que me permite adquirir una visión amplia y completa de los desafíos que enfrento. Con gran capacidad de adaptación a diferentes situaciones y roles que me caracterizan como una valiosa integrante en cualquier equipo de trabajo."}</p>
            <h4 style={textStyle}><sup>03</sup>{userData.language === 'en' ? "Analytics" : "Analítica"}</h4>
            <p style={textStyle}>{userData.language === 'en' ? "Ability to examine and process information critically and logically. This enables informed decision making and effective problem solving." : "Capacidad de examinar y procesar la información de manera crítica y lógica. Esto permite tomar decisiones informadas y resolver problemas de manera efectiva."}</p>
          </article>

        </section>

        <div className="link_talk">
          <p> would you like to talk to me?</p>
          <Link className="icono_mail__page_thanks" to="/thanks">
            [Clik here]
          </Link>
        </div>
        <div className="scrollToTop">
          <a href="#" onClick={scrollToTop}>
            Top
          </a>
        </div>
      </main>
    </>
  );
}
