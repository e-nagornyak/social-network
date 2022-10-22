import React from 'react';
import avatar from '../img/avatar.png'
import '../css/profile.css'

export const Profile = () => {
    return (
        <main className={'profile'}>
            <div>
                <span className={'profile-bg'}></span>
            </div>
            <div>
                <img
                    className={'img-avatar'}
                    src={avatar}
                    alt=""/>
            </div>
            <div>
                my post
                <div>new post</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>
        </main>

    );
};

