import NavBar from "../navbar/NavBar";
import UsersList from "../User/User";
import { Routes, Route } from "react-router-dom";
import Articles from "../Articles/Articles";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div>
      <NavBar />
      {/* <UsersList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </div>
  );
};

export default Header;
