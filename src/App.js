import React from "react";
import './App.css';

import { fake } from "./components/FakeObj/FakeObj";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
    const businessArr = fake.map(fak => <Card commObj={fak} />);
    return (
        <div className="body">
            <div className="header flex">
                <SearchBar />
            </div>
            <div className="flex business_container">
                {businessArr}
                {businessArr}
                {businessArr}
            </div>
        </div>
    )

}



export default App;