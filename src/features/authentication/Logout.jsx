import ButtonICon from "../../ui/ButtonIcon";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/Spinner";
function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonICon disabled={isLoading} onClick={logout}>
      {!isLoading ? <FiLogOut /> : <SpinnerMini />}
    </ButtonICon>
  );
}

export default Logout;
