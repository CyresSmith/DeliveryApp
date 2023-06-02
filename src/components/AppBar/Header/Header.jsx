import { HeaderBox, HeaderContainer } from './Header.styled';

const Header = ({ children, mediaType }) => {
  return (
    <HeaderBox mediaType={mediaType}>
      <HeaderContainer mediaType={mediaType}>{children}</HeaderContainer>
    </HeaderBox>
  );
};

export default Header;
