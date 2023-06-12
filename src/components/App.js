import React from "react";
import { fake } from "./FakeObj/FakeObj";
import Card from "./Card/Card";
import '../App.css';


function App() {
    return (
        <div>
           {
            fake.map(fak => <Card commObj={fak} />)
           }
        </div>
    )

}

export default App;