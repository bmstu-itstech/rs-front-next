import "./style.css";
import { memo, MouseEventHandler } from "preact/compat";
import { useState } from "preact/hooks";
import { isMobile } from "../../hooks";
import LinkField from "../../shared/LinkField";

function Achievement({
  title,
  description,
  coverUrl,
  photoUrl,
  mediaUrl,
  compact = false,
  onClick
}: {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  mediaUrl: string;
  coverUrl: string;
  compact?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {

  const [hovered, setHovered] = useState<boolean>(false);
  const mobile = isMobile();

  if (mobile) {
    return (
      <div
        className="achievement-mobile-outer"
      >
        <img src={coverUrl} />
        <div class="v-delimiter" />
        <div
          className="info"
        >
          <div class="title">{title}</div>
          <div class="h-delimiter" />
          <LinkField title="Подробнее" url={photoUrl} />
        </div>
      </div>
    );
  };

  if (compact) {

    return (
      <div
        className="achievement compact"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: `url(${coverUrl}) no-repeat center/cover, ${hovered ? 'rgba(193, 48, 0, 0.4)' : 'rgba(0, 0, 0, 0.5)'}` }}     
        onClick={onClick}  
      >
        <div className="title">
          {hovered ? 'Подробнее' : title}
        </div>
      </div>
    );

  };

  return (
    <div
      className="achievement outer"
      style={{ backgroundImage: `url(${coverUrl})` }}
      onClick={onClick}
    >
      <div className="inner">
        <div className="info">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="actions">
          <div
            className="button"
            onClick={() => window.location.href = photoUrl}
          >ФОТО</div>
          <div
            className="button"
            onClick={() => window.location.href = mediaUrl}
          >СМИ</div>
        </div>
      </div>
    </div>
  );

};

export default memo(Achievement);
