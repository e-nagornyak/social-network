import React from 'react';
import preloader from "../../../assets/img/loader.svg";

type PreloaderPropsType = {

};

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div style={{backgroundColor: "white"}}>
            <img src={preloader} alt={'loader'}/>
        </div>
    );
};