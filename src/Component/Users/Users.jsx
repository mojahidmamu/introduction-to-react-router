import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h2>Our Users: {user.length} </h2>
      <p>Fantastic and vodro User..</p>
    </div>
    // {
    //   Users.map(user => <User key={id} user={user}></User>)
    // }
    
  );
};

export default Users;
