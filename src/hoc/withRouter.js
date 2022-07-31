import React from "react";
import {useLocation, useNavigate, useParams, useHistory} from "react-router-dom";


export const withRouter = (Component) => {
	let ComponentWithRouterProp = (props) => {
		let location = useLocation();   //in router v6 in class comps we use hooks
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{location, navigate, params, }}
			/>
		);
	}
	return ComponentWithRouterProp;
}

