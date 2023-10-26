import { useFirebase } from "../context/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";

function Redirect() {
  const { isLoading, user } = useFirebase();
  const location = useLocation();

  return isLoading ? (
    <div className="h-screen flex items-center justify-center">
      <ReactLoading className="" type="spin" color="#4632a8" height={20} width={30} />
    </div>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/user/register" state={{ from: location }} replace />
  );
}
export default Redirect;
