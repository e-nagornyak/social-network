import {addPost, PostType} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import React from "react";


export type MapStatePropsType = {
    posts: PostType[]
}

export type mapDispatchPropsType = {
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addPost})
)(MyPosts)

