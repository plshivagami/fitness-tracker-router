import { useAuth } from "../auth/AuthContext";
//import { usePage } from "./PageContext";
import { NavLink, useNavigate } from "react-router";

// /** Navbar with site navigation links */
// export default function Navbar() {
//   const { token, logout } = useAuth();
//   const { setPage } = usePage();
//   return (
//     <header>
//       <p>Fitness Trackr</p>
//       <nav>
//         <a onClick={() => setPage("activities")}>Activities</a>
//         {token ? (
//           <a onClick={() => logout()}>Log out</a>
//         ) : (
//           <>
//             <a onClick={() => setPage("register")}>Register</a>
//             <a onClick={() => setPage("login")}>Login</a>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect home after logout
  };
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activities">Activities</NavLink>
        {token ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
