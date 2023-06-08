import React, { useContext, useState } from "react";
import TypeIt from "typeit-react";
import './Home.scss';
import '../../componentes/Footer/Footer';
import Footer from "../../componentes/Footer/Footer";
import { LanguageContext } from "../../App";



export default function Home() {
    const [buttonText, setButtonText] = useState("Freeze");
    const [instance, setInstance] = useState(null);
  
    const toggleFreeze = () => {
      if (instance.is("frozen")) {
        instance.unfreeze();
        setButtonText("[Freeze]");
        return;
      }
  
      instance.freeze();
      setButtonText("[Unfreeze]");
    };

const languageContext = useContext(LanguageContext);

const getTextEn = function(instance) {
    instance.type("I want to be")
        .pause(2000).delete(12).pause(1800)
        .type("a Good Developer").pause(2000)
        .delete(9).pause(1200)
        .type("Designer").pause(2000)
        .delete(15).pause(1200)
        .type("but above all").pause(2200)
        .delete(13).pause(2000)
        .type("a Good").pause(1000).type(" Person...").pause(7000)

    return instance;
}

const getTextEs = function(instance) {
    instance.type("Quiero ser")
        .pause(2000).delete(10).pause(1800)
        .type("una Buena Desarrolladora").pause(2000)
        .delete(14).pause(1200)
        .type("Diseñadora").pause(2000)
        .delete(20).pause(1200)
        .type("pero sobre todo").pause(2200)
        .delete(15).pause(2000)
        .type("una Buena ").pause(1000).type("Persona...").pause(7000)

    return instance;
}

return (
    <>

       <main >

            <div className="typeit_container">
                <TypeIt className="typeit" 
                    options={{ loop: true }}
                    getBeforeInit={(instance) => {
                        setInstance(instance);
                        return languageContext.language === 'en' ? getTextEn(instance) : getTextEs(instance) ;
                    }}
                />
            </div>
            <button className="freeze_text" onClick={toggleFreeze}>{buttonText}</button>
        </main>

        <footer>

            <Footer />

        </footer>
    </>
);

                }

