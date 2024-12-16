import React from 'react';
import cl from "../moduleStyles/AchievementsBlock.module.css"
import Image from "next/image";
import ExampleImage from "@/app/assets/b62bf66caf09a0a9bd701c50794bd2e2.jpeg"

const AchievementsBlock = () => {
    return (
        <div className={cl.cont}>
            <div className={cl.bl1}>
                <div className={cl.black}>

                </div>
                <div/>
                <div className={cl.leftBl}>
                    <div>
                        <div className={cl.t1}>
                            Достижение 3
                        </div>
                        <div className={cl.t2}>
                            День программиста – настоящая точка притяжения программистов и топовых российских
                            IT-компаний.<br/>
                            В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных
                            профессиях
                            в сфере IT.
                        </div>
                    </div>
                    <div className={cl.btn}>
                        <div className={cl.btn1}><span className="text text-white block  max-w-[90vw] h-fit">ФОТО</span>
                        </div>
                        <div className={cl.btn1}><span className="text text-white block  max-w-[90vw] h-fit">СМИ</span>
                        </div>
                    </div>
                </div>
                <Image src={ExampleImage} alt={""} className={cl.img}/>
            </div>

            <div className={cl.cc2}>
                <div className={cl.card1}>
                    <div className={cl.blf}/>
                    <div className={cl.rHover}/>
                    <Image src={ExampleImage} alt={""} className={cl.img2}/>
                    <div className={cl.tt3}><span
                        className="text text-white block  max-w-[90vw] h-fit ">ПОДРОБНЕЕ</span></div>
                </div>
                <div className={cl.card1}>
                    <div className={cl.blf}/>
                    <div className={cl.rHover}/>
                    <Image src={ExampleImage} alt={""} className={cl.img2}/>
                    <div className={cl.tt3}><span
                        className="text text-white block  max-w-[90vw] h-fit ">ДОСТИЖЕНИЕ 3</span></div>
                </div>
                <div className={cl.card1}>
                    <div className={cl.blf}/>
                    <div className={cl.rHover}/>
                    <Image src={ExampleImage} alt={""} className={cl.img2}/>
                    <div className={cl.tt3}><span
                        className="text text-white block  max-w-[90vw] h-fit ">ДОСТИЖЕНИЕ 3</span></div>
                </div>

            </div>
        </div>
    );
};

export default AchievementsBlock;