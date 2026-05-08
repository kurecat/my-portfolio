import styled from "styled-components";
import { colors } from "../../Styles/theme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <Logo href="#home" aria-label="Go to home section">
          Jeong Portfolio
        </Logo>

        <Nav aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <MobileContactButton href="#contact">Contact</MobileContactButton>
      </HeaderInner>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${colors.border};
  background: rgba(247, 247, 244, 0.82);
  backdrop-filter: blur(16px);
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 72px;
    padding: 0 24px;
  }
`;

const Logo = styled.a`
  color: ${colors.text};
  text-decoration: none;
  font-size: 24px;
  font-weight: 850;
  letter-spacing: -0.045em;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.accent};
  }

  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 44px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${colors.muted};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: ${colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MobileContactButton = styled.a`
  display: none;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background: ${colors.text};
  color: ${colors.background};
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;
