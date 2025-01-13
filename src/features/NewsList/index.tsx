import "./style.css";
import { memo } from "preact/compat";
import { NewsItem } from "../../entities";
import type { INews } from "../../types";

interface NewsListProps {
    items: INews[]
};

const NewsList: React.FC<NewsListProps> = ({
    items
}) => {

    return (
        <div class="news-list">
            {items.map(item => <NewsItem {...item} />)}
        </div>
    );

};

NewsList.displayName = "NewsList";

export default memo(NewsList);
