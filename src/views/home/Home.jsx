import React, { useContext } from "react";
import TypeIt from "typeit-react";
import './Home.scss';
import '../../componentes/Footer/Footer';
import Footer from "../../componentes/Footer/Footer";
import { LanguageContext } from "../../App";



export default function Home() {


//    const userData = useContext(LanguageContext);
//    const typeitEs=() => {
//
//  return (
//      <>
//          <main>
//              <div {userData.language === 'en' ? Home() : { typeitEs }} className="typeit_container">
//                  <TypeIt className="typeit"
//                      getBeforeInit={(instance) => {
//                          instance.type("Quiero ser")
//                              .pause(2000).delete(10).pause(1800)
//                              .type("una Buena Desarrolladora").pause(2000)
//                              .delete(14).pause(1200)
//                              .type("Diseñadora").pause(2000)
//                              .delete(20).pause(1200)
//                              .type("pero sobre todo").pause(2200)
//                              .delete(15).pause(2000)
//                              .type("uan buena").pause(1000).type(" Persona...")
//
//                          return instance;
//
//                      }}
//                  />
//              </div>
//          </main>
//
//      </>
//  );
//

return (
    <>

       <main >
            <div className="typeit_container">
                <TypeIt className="typeit"
                    getBeforeInit={(instance) => {
                        instance.type("I want to be")
                            .pause(2000).delete(12).pause(1800)
                            .type("a Good Developer").pause(2000)
                            .delete(9).pause(1200)
                            .type("Designer").pause(2000)
                            .delete(15).pause(1200)
                            .type("but above all").pause(2200)
                            .delete(13).pause(2000)
                            .type("a Good").pause(1000).type(" Person...")

                        return instance;

                    }}
                />
            </div>
        </main>

        <footer>

            <Footer />

        </footer>
    </>
);

                }

