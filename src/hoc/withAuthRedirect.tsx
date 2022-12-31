import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


// function withAuthRedirect <T>(Component: ComponentType<T>) {
//     class RedirectComponent extends React.Component<mapStateToPropsType>{
//         render(){
//             if (!this.props.isAuth) return <Redirect to={"/login"}/>
//             return <Component {...this.props}/>
//         }
//     }
//     let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
//     return ConnectedRedirectComponent
// }
//
// export default withAuthRedirect;

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}