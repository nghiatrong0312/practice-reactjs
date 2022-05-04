import React from "react";
import Header from "./modules/common/components/Header";
import {DataStory} from "./modules/common/Context/DataContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import HistoryOrder from "./modules/feature/Order/HistoryOrder";
import Home from "./modules/feature/Home/Home";
import Body from "./modules/common/components/Body";

function App() {
    return (
        <Router>
            <DataStory>
                <div>
                    <Header/>
                </div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/history-order" exact element={<HistoryOrder/>}/>
                </Routes>
            </DataStory>
        </Router>
    );
}

export default App;
