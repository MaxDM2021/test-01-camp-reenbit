import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import {
  UserNavDiv,
  UserNavLink,
  UserNavIcon,
  LogOutContainer,
  LogOutButton,
  LogOutText,
} from './UserNav.styled';

import { Modal } from 'components/Modal/Modal';
import { ConfirmLogout } from 'components/ConfirmLogout/ConfirmLogout';
import { logout } from 'redux/Auth/operations';

import AccountIcon from '../../images/userAndPets/account-icon.svg';
import { HiOutlineLogout } from 'react-icons/hi';
import { theme } from '../servises/theme';

export const UserNav = () => {
  const dispatch = useDispatch();

  const [showConfirm, setShowConfirm] = useState(false);

  const toggleConfirm = () => {
    setShowConfirm(prevState => !prevState);
    document.body.classList.toggle('is-modal-open');
  };

  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <>
      <UserNavDiv>
        <UserNavLink to="/">
          <UserNavIcon src={AccountIcon} alt="account" />
          Home
        </UserNavLink>

        <LogOutContainer type="button" onClick={toggleConfirm}>
          <LogOutButton>
            <HiOutlineLogout size={25} color={theme.colors.accent} />
          </LogOutButton>
          <LogOutText>Log Out</LogOutText>
        </LogOutContainer>
      </UserNavDiv>

      {showConfirm && (
        <Modal closeModal={toggleConfirm}>
          <ConfirmLogout cancel={toggleConfirm} accept={logoutUser} />
        </Modal>
      )}
    </>
  );
};
