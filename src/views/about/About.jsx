import React from "react";
import "./About.scss";
import Thanks from "../thanks/Thanks";
import Work from "../work/Work";

export default function About() {
  return (
    <>
      <main className="about_main">
        <section className="about_box">
          <article className="about__p">
            <h1>I'm glad to meet you. </h1>
            <p> I'm Seokye Lee. Born in Busan, South Korea, I dreamed and
            wondered since my childhood. I studied in the <em>  Art and Design and
            Cinematography </em> sectors, I managed to work as head of the <strong>art
            direction department for films and series of television</strong> until I decided to resume
            my life after learning the emptiness of the word <em>Success.</em> </p>
            <p>
              I arrived
            in Spain and, in love with <em>Spanish</em>, I did a master's degree in film
            directing, I made two <em>short films</em>, which were selected at <em>La Mostra
            Valencia.</em> While doing projects as a translator in various Korean
            companies, she even participated as a quality manager in the
            <em>'Artificial Intelligence Learning Data Construction Project'</em>
            promoted by the <em>National Intelligence Agency (NIA) under the
            Ministry of Science and ICT.</em> </p>
            <p>Graduated with an <strong>approved degree in the field of art</strong>, I continue to carry out <em>professional training in
            Design of graphic products</em>, in which I start in HTML and CSS.
            Interested in the digital world, I continued with the <em>UX Design
            course: UDEMI </em>user experience and the certified training on Web
            creation with WordPress. <br/>
        <strong>Currently </strong>finishing the specialized
            postgraduate degree in <em>FrontEnd Web Design and Development</em> at the
            <em>Higher School of Art and Technology </em>to achieve the goal of <em>living
            from my passion.</em>
            </p>
            
          </article>
        
          <article className="about__p">
            <h3><sup>01</sup>Empathy</h3>
              <p>With a great ability to put myself in the client's place, I am able to understand their needs and perspectives, to achieve precise, scalable and sustainable business models over time.</p>
            <h3><sup>02</sup>Multidisciplinary</h3>
              <p>I have studied and worked in different areas that require a large amount of diverse skills and knowledge, which allows me to acquire a broad and comprehensive vision of the challenges I face. With a great ability to adapt to different situations and roles that characterize me as a valuable member of any work team.</p>
            <h3><sup>03</sup>Analytics</h3>
              <p>Ability to examine and process information critically and logically. This enables informed decision making and effective problem solving.</p>
          </article>
          
        </section>
        <h2 className="half_step">"I walk half a step every day but without stopping."</h2>

        <Work />

        <Thanks />
      </main>
    </>
  );
}
