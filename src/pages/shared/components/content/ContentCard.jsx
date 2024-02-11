import * as S from "./ContentCard.style";
import useTimeAgo from "../../../../customHooks/useTimeAgo";
import useConvertDateFormat from "../../../../customHooks/useConvertDateFormat";

const ContentCard = ({ link }) => {
  return (
    <S.Container
      onClick={() => {
        window.open(link.url);
      }}
    >
      {link.imageSource ? (
        <img className="img" src={link.imageSource} alt={link.title} />
      ) : (
        <img
          className="img"
          src="/assets/shared/no-image.png"
          alt={link.title}
        />
      )}

      <div className="text-box">
        <p>{useTimeAgo(link.createdAt)}</p>
        <p className="desc">{link.description}</p>
        <p className="date">{useConvertDateFormat(link.createdAt)}</p>
      </div>
    </S.Container>
  );
};

export default ContentCard;