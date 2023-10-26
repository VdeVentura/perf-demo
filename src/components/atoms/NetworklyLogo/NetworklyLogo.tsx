import styled from 'styled-components';

import logoLargeWhite from './large-white.svg';
import logoLarge from './large.svg';
import logoSmallWhite from './small-white.svg';
import logoSmall from './small.svg';

export interface INetworklyLogo {
  full?: boolean;
  white?: boolean;
  small?: boolean;
}

const getImage = ({ white, small }: Pick<INetworklyLogo, 'white' | 'small'>) => {
  if (small) {
    return white ? logoSmallWhite : logoSmall;
  }
  return white ? logoLargeWhite : logoLarge;
};

const NetworklyLogo = styled.img.attrs<INetworklyLogo>((props) => ({
  src: getImage({ white: props.white, small: props.small }),
}))<INetworklyLogo>`
  margin: auto;
  display: block;
  width: ${({ full }) => (full ? '100%' : 'auto')};
  height: 100%;
`;

export default NetworklyLogo;
