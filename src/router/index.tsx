import React, {useContext} from "react";
import {BrowserRouter, Switch, Route, Redirect, RouteProps} from "react-router-dom";
import AuthContext from "./../context/AuthContext";
import {AuthSignIn, AppHome} from "./../page";

const PrivateRouter: React.FC<RouteProps> = ({children, ...args}) => {
	const {signed} = useContext(AuthContext);
	return (
		<Route
			{...args}
			render={({location}) =>
				signed ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/AuthSignIn",
							state: {from: location},
						}}
					/>
				)
			}
		/>
	);
};

const Router: React.VFC = () => {
	const {signed, appLoading} = useContext(AuthContext);
	if (appLoading) {
		return <span>Loading</span>;
	}
	if (signed) {
		return (
			<BrowserRouter>
				<Switch>
					{/* Private routes */}
					<PrivateRouter path="/AppHome" component={AppHome} />
					<Route component={() => <Redirect to="/AppHome" />} />
				</Switch>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Switch>
				{/* Public routes */}
				<Route component={AuthSignIn} path="/AuthSignIn" />
				<Route component={() => <Redirect to="/AuthSignIn" />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
