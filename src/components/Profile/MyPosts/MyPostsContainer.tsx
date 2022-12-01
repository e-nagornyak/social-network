import {addPostAC, updatePostTextAC} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ProfilePageType, StateType} from "../../../redux/store";


let mapStateToProps = (state: StateType): ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updatePostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);