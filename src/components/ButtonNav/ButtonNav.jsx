import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { getIsLoggedIn } from 'redux/Auth/selectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { CloseBtn } from 'components/ButtonNav/CloseBtn';
import { Container } from '../servises/Container';

import { ButtonNavMenu, LogoMenu, UserMenu } from './ButtonNav.styled';


export const ButtonNav = ({ close }) => {
  const isAuth = useSelector(getIsLoggedIn);
  const isMobile = useMedia('(max-width: 767px)');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <ButtonNavMenu onClick={close}>
      <Container>
        <LogoMenu>
          <CloseBtn onClick={close} />
        </LogoMenu>
        <UserMenu>
          {isMobile && isAuth && <UserNav />}
          {isMobile && !isAuth && <AuthNav />}
        </UserMenu>
      </Container>
    </ButtonNavMenu>
  );
};
