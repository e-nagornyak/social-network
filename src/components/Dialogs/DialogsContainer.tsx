import {sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/store";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onMessageChange: (text: string) => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);