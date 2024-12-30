"use client"
import React, {FC, useState} from 'react';
import cl from "../moduleStyles/AchievementsBlock.module.css"
import Image from "next/image";
import ExampleImage from "@/app/assets/b62bf66caf09a0a9bd701c50794bd2e2.jpeg"
import {AchievementItem} from "@/app/models/achievementItem";
import AcElement from "@/app/models/acElement";
import {Bold, Text} from "@/components/shared";
import {isMobile} from "@/components/hooks";

export const defaultItems: AchievementItem[] = [
    {
        name: "Достижение 1",
        id: 86451,
        description: "День программиста – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: true,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"
    },
    {
        name: "Достижение 2",
        id: 245,
        description: "День программиста – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }
    , {
        name: "Достижение 3",
        id: 36736,
        description: "День программиста – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }
    , {
        name: "Достижение 4",
        id: 435467,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 2344,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 4876,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 26524,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 46532,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 524,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 2564,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 427725,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 4726,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 333374,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    }, {
        name: "Достижение 4",
        id: 4444,
        description: "День Сурка – настоящая точка притяжения программистов и топовых российских IT-компаний.\n В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных\n профессиях в сфере IT.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: "https://s3-alpha-sig.figma.com/img/4502/3ae3/b62bf66caf09a0a9bd701c50794bd2e2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV48kQXE6rhxHusPCkXBcTwwG1CGFG-tSZgMsfKn-7kAa2-TFrXqmJ7oKplcfxH9rmWG~JinlxX8JN5z2wnTiVOWXtAZTJa9GBXhYUkxsG73ZmipPYN1g2nVgj9Gn0yx-0nqaq-TtvwvYhMhq7vUXJuDRz2~WTaSxvtino4rGmcxYScDZaRMYCtofjsXCtZT~3U6ogs5BjNkouQbI68lyarOdEnrd1dRJPrC8QBhUTWDPmqKMmFBbssLn5DZLfq3TUQ8d2bG9GtHs39ZIvcJfWQKXe1uARK5JVtl04qlXlBf2fXXbXjfeAzSxLBf9~DqwrqCE5jR0OnXclYx~A5n3w__"

    },
];

interface IProps {
    list: AchievementItem[] | undefined;
}

const AchievementsBlock: FC<IProps> = ({list}) => {
    const isMobileDevice = isMobile();
    if (!list) list = defaultItems;
    list = list.slice(0, 4);
    const [activeBlock, setActiveBlock] = useState<AchievementItem | undefined>(list.find((el) => el.isDefault));
    const [otherItems, setOtherItems] = useState(list.filter((el) => !el.isDefault));
    const changeValue = (el: AchievementItem) => {
        if (activeBlock) {
            for (let i = 0; i < list?.length; i++) {
                // console.log(el?.id, otherItems[i]?.id)
                if (el?.id === otherItems[i]?.id) {
                    const temp = otherItems[i];
                    const newM = otherItems

                    newM[i] = activeBlock;
                    setOtherItems(newM);
                    setActiveBlock(temp);
                    location.hash = "main";
                    document.getElementById("main")?.scrollIntoView();

                }
            }
        }
    }

    return (
        <div className={` flex justify-center flex-col items-center`}
             style={{backgroundImage: `url(/backgrounds/2nd.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            {isMobileDevice ? <Bold size={36}>ДОСТИЖЕНИЯ</Bold> : <Text size={82} className={"z-10 pt-10"}>ДОСТИЖЕНИЯ</Text>}
            <div className="content">

                <div className={cl.cont} id="main">
                    <div className={`${cl.bl1}`}>
                        <div className={cl.black}></div>
                        <div/>
                        <div className={`${cl.leftBl} grid grid-cols-2 grid-rows-3`}>
                            <div className={"grid col-span-1 row-span-2 text-ellipsis"}>
                                <div className={cl.t1}>
                                    {activeBlock?.name}
                                </div>
                                <div className={cl.t2}>
                                    {activeBlock?.description}
                                </div>
                            </div>
                            <div className={`${cl.btn} grid row-span-1 row-start-3 self-end`}>
                                {activeBlock?.button.map((el, i) => (
                                    <a key={i} href={el.url}>
                                        <div className={cl.btn1}><span
                                            className="text text-white block  max-w-[90vw] h-fit">{el.label}</span>
                                        </div>
                                    </a>
                                ))}

                                {/*<div className={cl.btn1}><span className="text text-white block  max-w-[90vw] h-fit">СМИ</span></div>*/}
                            </div>
                        </div>
                        <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""}
                               className={cl.img}
                               width={861}
                               height={650}/>
                    </div>

                    <div className={`${cl.cc2} grid grid-cols-3`}>
                        {otherItems?.map((el) => (
                            <div key={el.id} className={"grid col-span-1 z-10"}>
                                <AcElement activeBlock={el} onClick={() => changeValue(el)} t={1}/>
                            </div>
                        ))}
                    </div>

                    <div className={cl.ccMobile}>
                        {activeBlock ? <AcElement activeBlock={activeBlock} t={0} c={2}/> : <></>}
                        {otherItems?.map((el, i) => (
                            <AcElement activeBlock={el} key={el.id} t={0} c={i+3}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsBlock;