
import Navbar from './Compoent/Navbar'
import './App.css'
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState();
    const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
};

  return (
    <>
      <header className="react">
      <Navbar title="Lets Grow More"/>
      <div className="btn" onClick={getUsers} >
          Get Users
    </div>
      </header>
      <div className="images-row">
        {users?.map((current, index) => {
          return (
            
            <div className=" image-column" key={index}>
              
              <img src={current.avatar} className="img-top" alt="..." />
              <div className="image-body">
                
                <p className="image-title">
                  
                  {current.first_name} {current.last_name} 
                  
                </p>
                <p className="image-text">{current.email}</p>
                
              </div>
             
            </div>
            
          );
          
        })}
       
      </div>
     
    </>
  );
}
export default App;


