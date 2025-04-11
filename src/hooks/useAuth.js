import { useContext } from "react";
import { login } from "../components/api/auth-api.js";
import { AuthContext } from "../context/AuthContext.jsx";

export const useLogin = () => {
	const {changeAuthState} = useContext(AuthContext);

	const loginHandler = async (email, password) => {
			const {password: _, ...authData} = await login(email, password);
			changeAuthState(authData);

			return authData;
	
  }
  return loginHandler;
}