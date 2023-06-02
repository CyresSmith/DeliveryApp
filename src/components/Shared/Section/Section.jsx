import { useSelector } from 'react-redux';
import { getMediatype } from 'redux/selectors';

import { SectionBox, Container } from './Section.styled';

const Section = ({ children }) => {
  const mediaType = useSelector(getMediatype);

  return (
    <Container mediaType={mediaType}>
      <SectionBox mediaType={mediaType}>{children}</SectionBox>
    </Container>
  );
};

export default Section;
