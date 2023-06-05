import React from "react";
import './About.scss'
import Thanks from "../thanks/Thanks";
import Work from "../work/Work";

export default function About() {
  return (
    <>
      <main className="about_main">
        <section className="about_box">
          <p className="about__p">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit pretium primis
            sapien scelerisque felis, ultricies per mauris natoque nisl. Arcu aptent
            iaculis et pharetra maecenas mattis primis sociosqu quam natoque congue
            blandit, rutrum id egestas potenti elementum himenaeos taciti in turpis
            mauris nisi, sapien aliquam lobortis cras facilisis nostra malesuada
            ornare euismod habitasse fringilla. Taciti venenatis tempor sapien
            viverra mollis consequat vel curabitur parturient vivamus fringilla
            lacinia potenti, metus natoque conubia rhoncus penatibus eu eget luctus
            tristique dui suscipit varius.
          </p>
          <p className="about__p">
            Taciti venenatis tempor sapienviverra mollis consequat vel curabitur parturient vivamus fringilla
            lacinia potenti, metus natoque conubia rhoncus penatibus eu eget luctus
            tristique dui suscipit varius. Iaculis sociosqu tempor at malesuada
            laoreet interdum platea, arcu quam turpis parturient erat ridiculus sed,
            tincidunt justo conubia pellentesque sociis fames. Platea nulla risus
            nec mattis blandit tempus potenti lectus morbi donec montes tincidunt
            himenaeos dignissim praesent, bibendum cursus neque litora tortor vitae
            et mi etiam netus auctor posuere eget nostra.
          </p>

        </section>

        <Work />

        <Thanks />

      </main>
    </>

  );
}
