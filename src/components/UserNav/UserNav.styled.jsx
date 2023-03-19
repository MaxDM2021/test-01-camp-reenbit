import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: flex;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const UserNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  width: 164px;
  height: 44px;
  border-radius: 40px;
  text-align: center;

  background: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.manrope};
  color: ${p => p.theme.colors.white};

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;

  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const UserNavIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;

// =========LogOut===================

export const LogOutContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;

  background: none;

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    justify-content: left;
    bottom: 25px;
    left: 30px;
  }
  @media screen and (min-width: 1280px) {

    bottom: 0;
    top: 0;
    margin-left: 16px;
    align-self: flex-start;
  }
`;

export const LogOutText = styled.span`
  margin-left: 8px;

  font-weight: 500;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 20);
  }
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LogOutButton = styled.div`
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;