import React from "react";
import TypeIt from "typeit-react";
import './Home.scss'

export default function Home() {

<div className="typeit">
    <TypeIt
        getBeforeInit={(instance) => {
            instance.type("I want be a", { delay: 300 })
                .type("<br>Good Developer.", { delay: 3000 })
                .delete(10, { delay: 1000 })
                .type("Designer.", { delay: 3000 })
                .delete(14, { delay: 1000 })
                .type("above all", { delay: 3000 })
                .delete(21, { delay: 3000 })
                .type("<strong>Good person.</strong>", { delay: 600 })
                


            // Remember to return it!
            return instance;

        }}
    />;

</div>
}