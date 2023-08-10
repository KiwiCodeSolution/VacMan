import { useAppDispatch } from "./reduxHooks";
import { setIsAuth, setIsLoading, setUser } from "../redux/userSlice";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setAuthHeader } from "redux/userOperations";
import serverUrl from "../appConfig";

const getGoogleUserData = async (accessToken: string) => {
  try {
    setAuthHeader(accessToken);
    const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo");
    return data;
  } catch (error) {
    return null;
  }
};
const useGoogleAuth = () => {
  const dispatch = useAppDispatch();

  return useGoogleLogin({
    onSuccess: async resp => {
      dispatch(setIsLoading(true));
      const userData = await getGoogleUserData(resp.access_token);
      const { data } = await axios.post(`${serverUrl}auth/googleAuth`, { userData });
      setAuthHeader(data.token);
      data.currProfile = "google";
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
      dispatch(setIsLoading(false));
    },
    onError: err => console.log("error:", err),
  });
};

export default useGoogleAuth;
