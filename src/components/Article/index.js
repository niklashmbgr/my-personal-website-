import StyledArticle from "../Article/styled";
import StyledText from "../StyledText/styled";
import StyledSpan from "../StyledSpan/styled";

export default function Article() {
  return (
    <StyledArticle>
      <StyledText>
        This Summer, I decided to embark on a completely new career path.
      </StyledText>
      <StyledText>
        So I took a 12-week Web Development Bootcamp at neuefische.
      </StyledText>
      <StyledText>
        Now I enjoy myself by keep on scratching the tip of the web development
        iceberg everyday
        <StyledSpan role="img" aria-label="iceberg">
          🗻
        </StyledSpan>
        <StyledSpan role="img" aria-label="man-technologist">
          👨‍💻
        </StyledSpan>
        <StyledSpan role="img" aria-label="hammer-and-wrench">
          🛠
        </StyledSpan>
      </StyledText>
    </StyledArticle>
  );
}
