"use client";
import React from "react";

interface Props {
    handler: (data: string) => void;
}

const GNB: React.FC<Props> = ({handler}) => {
    const categoryHandler = (subject: string) => {
        handler(subject)
    }


    return (
        <div className="flex flex-row ml-[15px]">
            <div onClick={() => categoryHandler('Wine')}>
                <img src={'/icon/wines.svg'} alt={'winesICON'}/>
            </div>
            <div onClick={() => categoryHandler('Grape')}>
                <img src={'/icon/grapes.svg'} alt={'grapesICON'}/>
            </div>
            <div onClick={() => categoryHandler('Country')}>
                <img src={'/icon/wineries.svg'} alt={'wineriesICON'}/>
            </div>
            <div onClick={() => categoryHandler('')}>
                <img src={'/icon/pairing.svg'} alt={'pairingICON'}/>
            </div>


        </div>
    );


}

export default GNB;