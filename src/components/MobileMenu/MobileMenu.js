/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>

      <Close onClick={onDismiss}>
        <Icon id="close" />

      </Close>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
      </Content>

    </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: var(--color-overlay);
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0px;
  bottom: 0;
  background: white;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  font-size: 1.2rem;
  gap: 12px;

  a {
    text-decoration: none;
    color: var(--color-gray-500);
  }
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 45px;
  
  a {
    text-decoration: none;
    color: var(--color-gray-300);
    font-size: 0.8rem;
  }
`;
const Close = styled(UnstyledButton)`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  margin-right: 10px;
`
export default MobileMenu;
