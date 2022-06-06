import React, { useContext } from "react";
import { UserContext } from "./ExampleApp";

export const UserInfo = () => {
  const { userName } = useContext(UserContext);

  return <span>{userName}</span>;
};

export const UserNameInput = () => {
  const { userName, setUserName } = useContext(UserContext);

  const onUserChange = (e) => setUserName(e.target.value);

  return <input type="text" value={userName} onChange={onUserChange} />;
};

// export const Header = () => {
//   console.log("header");
//   return <UserInfo />;
// };

// export const Layout = ({ children }) => {
//   console.log("layout");
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//     </div>
//   );
// };
