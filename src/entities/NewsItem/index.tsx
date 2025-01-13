import "./style.css";
import { memo } from "preact/compat";
import { isMobile } from "../../hooks";
import { ArrowButton } from "../../shared";
import type { INews } from "../../types";

const NewsItem: React.FC<INews> = ({
    title,
    description,
    actionLink,
    coverUrl,
    caption
}) => {

    const mobile = isMobile();

    if (mobile) {
        return (
            <div
                class="news-item compact"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20vh, rgba(193, 48, 0, 0.5)), url(${coverUrl})` }}
                onClick={() => window.location.href = actionLink}  
            >
                <div class="title">
                    {title}
                </div>
            </div>
        );
    };

    return (
        <div
            class="news-item"
        >
            <img class="cover" src={coverUrl} alt="cover" />
            <div class="title-outer">
                <div class="title-inner">
                    {title}
                </div>
            </div>
            <div class="info">
                <div class="description">
                    {description}
                </div>
                <div class="action" onClick={() => window.location.href = actionLink}>
                    <div class="label">{caption}</div>
                    <div class="button">
                        <ArrowButton
                        />
                    </div>
                </div>
            </div>
        </div>
    )

};

NewsItem.displayName = "NewsItem";

export default memo(NewsItem);
