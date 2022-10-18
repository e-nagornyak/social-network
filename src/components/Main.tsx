import React from 'react';

export const Main = () => {
    return (
        <main className={'profile'}>
            <div>
                <img
                    className={'img-background'}
                    src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
            </div>
            <div>
                <img
                    className={'img-avatar'}
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
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

