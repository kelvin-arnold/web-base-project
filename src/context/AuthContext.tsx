import React, {createContext, useState, useEffect} from "react";
import {User} from "../types/auth";

export interface IAuthContextData {
	appLoading: boolean;
	signed: boolean;
	accessToken: string | null;
	user: User | null;
	userSecret: any | null;
	resetUserName: any | null;
	removeSession: () => void;
	saveUserName: (user: any) => void;
	saveUserScret: (secret: any) => void;
	setSession: (user: User, accessToken: string, refreshToken: string) => void;
	clearSession: () => void;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	// States
	const [user, setUser] = useState<User | null>(null);
	const [userSecret, setUserScret] = useState<any | null>(null);
	const [signed, setSigned] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string | null>(null);
	const [resetUserName, setResetUserName] = useState<any | null>(null);
	const [appLoading, setAppLoading] = useState<boolean>(true);
	// Effects
	useEffect(() => {
		(async () => {
			const storageUser = await localStorage.getItem("@Auth:GDNI:user");
			const storageToken = await localStorage.getItem("@Auth:GDNI:token");
			if (storageUser && storageToken) {
				const userParse = JSON.parse(storageUser);
				setUser(userParse);
				setAccessToken(storageToken);
				setSigned(true);
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve(true);
				}, 2000),
			);
			setAppLoading(false);
		})();
	}, [signed]);
	// removeSession
	const removeSession = async () => {
		localStorage.clear();
		setUser(null);
		setAccessToken(null);
		setSigned(false);
		setResetUserName(null);
	};
	// setSession
	const setSession = async (pUser: User, pAccessToken: string, pRefreshToken: string) => {
		localStorage.setItem("@Auth:GDNI:user", JSON.stringify(pUser));
		localStorage.setItem("@Auth:GDNI:token", pAccessToken);
		setSigned(true);
		setResetUserName(null);
		setUserScret(null);
	};
	// clearSession
	const clearSession = () => {
		localStorage.removeItem("@Auth:GDNI:user");
		localStorage.removeItem("@Auth:GDNI:token");
		setSigned(false);
		setUserScret(null);
		setResetUserName(null);
	};
	// Save Username
	const saveUserName = (userName: any) => {
		setResetUserName(userName);
	};
	// Save User Secret
	const saveUserScret = (secret: any) => {
		setUserScret(secret);
	};
	return (
		<AuthContext.Provider
			value={{
				user,
				userSecret,
				resetUserName,
				saveUserName,
				saveUserScret,
				signed,
				removeSession,
				accessToken,
				appLoading,
				setSession,
				clearSession,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
