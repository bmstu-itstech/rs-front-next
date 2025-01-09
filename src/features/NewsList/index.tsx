import "./style.css";
import { memo } from "preact/compat";
import { NewsItem } from "../../entities";
import type { INewsItem } from "../../types";

function NewsList({
    items
}: {
    items: INewsItem[]
}) {

    return (
        <div class="news-list">
            {items.map(item => <NewsItem {...item} />)}
        </div>
    );

};

export default memo(NewsList);
