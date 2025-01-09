import { INews } from "@/app/types";
import styles from "./NewsItem.module.css";

function NewsItem(item: INews) {

    return (
      <div
          className={styles.newsItem}
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20vh, rgba(193, 48, 0, 0.5)), url(${item.coverUrl})` }}
          onClick={() => window.location.href = item.actionLink}  
      >
          <div className={styles.title}>
              {item.title}
          </div>
      </div>
  );

};

export default NewsItem;
