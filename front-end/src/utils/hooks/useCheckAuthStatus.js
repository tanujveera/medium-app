import { checkAuthStatus } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";

const useCheckAuthStatus = () => {
  const dispatch = useDispatch();
  const checkAuth = useCallback(async () => {
    const response = await dispatch(checkAuthStatus());
    console.log(response);
  }, [dispatch]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
};

export default useCheckAuthStatus;
