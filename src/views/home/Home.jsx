import React from "react";
import TypeIt from "typeit-react";
import './Home.scss'

export default function Home() {
    return (
        <>
       <main>
       <div >
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
                            .type("a Good") .pause(1000).type(" Person")
                        // Remember to return it!
                        return instance;
                    }}
                />;
            </div>
        </main>
        </>
    );
}



