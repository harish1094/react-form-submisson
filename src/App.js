// App.js
import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    useNavigate
} from "react-router-dom";
import NewForm from "./Form/New";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Use Context With multipage form submission</h1>
            <br />
            <button
                onClick={() => {
                    navigate("/form");
                }}>
                Submit Form
            </button>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form/*" element={<NewForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
