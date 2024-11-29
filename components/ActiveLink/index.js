//Base Imports
import { useRouter } from 'next/router';
import styled from 'styled-components';

//Styles
import theme from '@BPSI/utils/theme';

const NavbarItem = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  position: relative;
  padding: 6px;

  & span {
    color: #051641;
    font-size: 1.6rem;
    left: 40px;
    top: 50%;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  & img {
    max-height: 20px;
    max-width: 20px;
  }

  .dark {
    display: none;
  }

  &.active .light {
    display: none;
  }

  &.active .dark {
    display: block;
  }

  &.active img {
    margin-right: 30px;
  }

  &.active {
    background-color: ${theme.colors.white};
    border-radius: 100px;
    width: 130px;
  }

  &.active span {
    width: auto;
    padding: 0 5px;
    overflow: visible;
  }
`;
function NavbarLink({ children, href, action }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (href && href !== router.pathname) {
      router.push(href);
    }

    if (action) {
      action();
    }
  };

  return (
    <NavbarItem
      href={href}
      onClick={handleClick}
      className={router.asPath === href ? 'active' : ''}
    >
      {children}
    </NavbarItem>
  );
}

export default NavbarLink;
