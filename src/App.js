import logo from './logo.svg';
import './App.css';
import AboutPage from "./pages/aboutPage/AboutPage";
import React , {useState} from "react";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const [users, setUsers] =useState([]);

    function addUser(user) {
        setUsers([...users, user]);
    }
    function deleteUser(userIndex) {
        setUsers(users.filter(( _,i) => i !== userIndex))
    }
    function clearUsers(){
        setUsers([])
    }
  return (
    <div className="App">
      <AboutPage onAddUser={addUser} onClearUsers={clearUsers} />
        <MainPage users={users} onDeleteUser={deleteUser} />
    </div>
  );
}

export default App;
