import { useSelector } from "react-redux";

import { selectLogin } from "redux/auth/auth-selectors";

const useAuth = () => {
    const result = useSelector(selectLogin);

    return result;
}

export default useAuth;