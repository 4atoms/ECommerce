import ReactDOM from 'react-dom';
import Main from './Pages/Application/index';
import Login from "../src/Pages/Login";

ReactDOM.render(
    <div>
        <Main/>
        <Login />
    </div>,
    // <Login />,
    //<Application />, 
    document.getElementById("app-root")
);
