import Navbar from "./Navbar";
import { Outlet } from "react-router";

/** The shared layout for all pages of the app */
// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//     </>
//   );
// }
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Render the matched child route here */}
      </main>
    </>
  );
}
