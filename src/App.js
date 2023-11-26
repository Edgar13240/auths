import './App.css';
import {useSelector} from "react-redux"
import {Registration} from "./component/RegistrationComponent/Registration";
import {Login} from "./component/LoginComponent/Login";

function App() {

    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users)

    return (
        <div className="App">
            <Registration/>
            <Login/>
            {
                products.map(products => <div key={products.id}>{products.name} - {products.surname}</div>)
            }

            {
                users.map(user => <div key={user.id}>{user.name} - {user.surname}</div>)
            }
        </div>
    );
}

export default App;
