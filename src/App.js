import React from "react";
import { fake } from "./components/FakeObj/FakeObj";
import Card from "./components/Card/Card"
import './App.css';


function App() {
    const businessArr = fake.map(fak => <Card commObj={fak} />);
    return (
        <div className="body">
            <div className="flex">
                {businessArr}
                {businessArr}
                {businessArr}
            </div>
        </div>
    )

}



export default App;