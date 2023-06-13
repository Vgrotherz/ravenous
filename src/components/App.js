import React from "react";
import { fake } from "./FakeObj/FakeObj";
import Card from "./Card/Card";
import '../App.css';


function App() {
    const businessArr = fake.map(fak => <Card commObj={fak} />);
    return (
        <div>
           {businessArr}
        </div>
    )

}



export default App;