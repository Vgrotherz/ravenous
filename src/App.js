import React from "react";
import './App.css';

// import { fake } from "./components/FakeObj/FakeObj"; // 4 и 5ый импорт нужен только если данные идут через массив объекта, а не просто через объект; 
// import Card from "./components/Card/Card";
import Business from "./components/Business/Business";
import SearchBar from "./components/SearchBar/SearchBar";


const App = () => {
    // const businessArr = fake.map(fak => <Card commObj={fak} />); // это нужно только если данные идут через массив объекта при импорте 4ой и 5ой строки;
    return (
        <div className="body">
            <div className="rav">
                <h1>RAVENOUS</h1>
            </div>
            <div className="header flex">
                <SearchBar />
            </div>
            <div className="flex business_container">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
            {/* <div>
                {businessArr}
            </div> */}
        </div>
    )

}



export default App;