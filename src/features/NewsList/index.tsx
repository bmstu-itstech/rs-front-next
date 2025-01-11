import "./style.css";
import { memo } from "preact/compat";
import { NewsItem } from "../../entities";
import type { INews } from "../../types";

function NewsList({
    items
}: {
    items: INews[]
}) {

    return (
        <div class="news-list">
            {items.map(item => <NewsItem {...item} />)}
        </div>
    );

};

export default memo(NewsList);
