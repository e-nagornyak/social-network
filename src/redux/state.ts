export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type StateType = {
    profilePage: {
        posts: PostsType[]
    }
    dialogsPage: {
        messages: MessagesType[]
        dialogs: DialogsType[]
    }
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 23},
            {id: 2, message: 'Hello!', likesCount: 12},
            {id: 3, message: 'Hello!', likesCount: 0},
            {id: 4, message: 'Hello!', likesCount: 5}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'How'},
            {id: 4, message: 'Yo!?'},
            {id: 5, message: 'How are you?'},
            {id: 6, message: 'Yes i am'}
        ],
        dialogs: [
            {id: 1, name: 'Evhen'},
            {id: 2, name: 'Lisa'},
            {id: 3, name: 'Bogdan'},
            {id: 4, name: 'Sonia'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Sasha'}
        ],
    }


}