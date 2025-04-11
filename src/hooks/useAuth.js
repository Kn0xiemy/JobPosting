import { useContext } from "react";
import { login } from "../components/api/auth-api.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { register } from "../components/api/auth-api.js";

export const useLogin = () => {
	const {changeAuthState} = useContext(AuthContext);

	const loginHandler = async (email, password) => {
			const {password: _, ...authData} = await login(email, password);
			changeAuthState(authData);

			return authData;
	
  }
  return loginHandler;
}


export const useRegister = () => {
	const { changeAuthState } = useContext(AuthContext);

	const registerHandler = async (email, password) => {
		const {password: _, ...authData} = await register(email, password);

		changeAuthState(authData);
		
		return authData;
	}

	return registerHandler;
}