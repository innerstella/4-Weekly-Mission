import Image from "next/image";

import S from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={S.container}>
      <div className={S.bar}>
        <input
          className={S.input}
          type="text"
          placeholder="검색어를 입력하세요"
        />
        <div className={S.image}>
          <Image
            src="/assets/common/search.svg"
            alt="검색 아이콘"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
