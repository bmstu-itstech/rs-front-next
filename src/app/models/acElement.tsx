"use client"
import React, {FC, useState} from 'react';
import cl from "../components/moduleStyles/AchievementsBlock.module.css";
import Image from "next/image";
import ExampleImage from "@/assets/b62bf66caf09a0a9bd701c50794bd2e2.jpeg";
import {AchievementItem} from "@/app/models/achievementItem";

interface Props {
    activeBlock: AchievementItem,
    onClick?: () => void
}

const AcElement: FC<Props> = ({activeBlock, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);


    return (

        <div className={cl.card1}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={onClick}
        >
            <div className={cl.blf}/>
            <div className={cl.rHover}/>
            <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""} className={cl.img2}
                   width={861}
                   height={650}/>
            <div className={cl.tt3}><span
                className={"text text-white block  max-w-[90vw] h-fit"}
                style={{visibility: isHovered ? 'hidden' : 'visible'}}>{activeBlock.name}</span></div>
            <div className={cl.tt3}><span
                className={"text text-white block  max-w-[90vw] h-fit"}
                style={{visibility: isHovered ? 'visible' : 'hidden'}}>ПОДРОБНЕЕ</span></div>
        </div>

    );
};

export default AcElement;