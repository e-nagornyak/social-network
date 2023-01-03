import {addPostAC, PostType, updatePostTextAC} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import React from "react";


type MapStatePropsType = {
    posts: PostType[]
    newPostText: string
}
export type myPostsPropsType = MapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updatePostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)

