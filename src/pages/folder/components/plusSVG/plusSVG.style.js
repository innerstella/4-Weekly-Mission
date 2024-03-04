import styled from "styled-components";

const StyledSVG = styled.svg`
  path {
    stroke: "#6D6AFE";
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    path {
      stroke: white;
    }
  }
`;

// 사용 예시
const PlusSVG = () => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.52175 2.46603C8.52175 2.17148 8.28297 1.9327 7.98841 1.9327C7.69386 1.9327 7.45508 2.17148 7.45508 2.46603L7.45508 7.96668L1.9545 7.96668C1.65994 7.96668 1.42116 8.20546 1.42116 8.50001C1.42116 8.79456 1.65994 9.03335 1.9545 9.03335L7.45508 9.03335L7.45508 14.534C7.45508 14.8285 7.69387 15.0673 7.98842 15.0673C8.28297 15.0673 8.52175 14.8285 8.52175 14.534L8.52175 9.03335L14.0224 9.03335C14.317 9.03335 14.5558 8.79457 14.5558 8.50002C14.5558 8.20546 14.317 7.96668 14.0224 7.96668L8.52175 7.96668L8.52175 2.46603Z"
        fill="#6D6AFE"
      />
    </StyledSVG>
  );
};

export default PlusSVG;