import P from 'prop-types';
import * as Styled from './styles';
import { Light } from './stories';

export const Heading = ({ children, Light = false }) => {
  return <Styled.Title Light={Light}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
