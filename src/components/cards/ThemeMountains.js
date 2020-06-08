import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { rgba, darken } from "polished";

const transitionDuration = "0.35s";

const Card = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: ${props => props.theme.colorGround};
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
  transition: background ${transitionDuration};
`;

const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.325rem;
`;

const CardDescription = styled.div`
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.75);
`;

const Sky = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colorSky};
  padding-bottom: 3rem;
  height: 260px;
  transition: background ${transitionDuration};
`;

const Button = styled.button`
  height: 40px;
  padding: 0 1.25rem;
  border-radius: 20px;
  border: 0;
  font-weight: 600;
  background: ${props => rgba(props.theme.colorMountain, 0.45)};
  color: white;
  width: 140px;
`;

const Footer = styled.div`
  height: 90px;
`;

const FooterMountains = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: translateY(-34px);
  width: 128%;
`;

const MountainStage = styled.div`
  z-index: ${props => props.zIndex || 0};
  width: calc(${props => props.mountainSize} * 1.25);
  height: calc(${props => props.mountainSize} / 2);
  transform: translateX(${props => props.shiftLeft || 0});
`;

const MountainWrapper = styled.div`
  width: ${props => props.mountainSize};
  height: ${props => props.mountainSize};
  transform: rotate(45deg);
`;

const MountainBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.mountainSize};
  height: ${props => props.mountainSize};
  background: ${props => props.theme.colorMountain};
  transition: background ${transitionDuration};
`;

const mountainGradient = (isDark, shadowColor, themeSetting) => css`
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${shadowColor}
    linear-gradient(
      to bottom,
      ${darken(0.05, shadowColor)} 40%,
      ${shadowColor} 100%
    );
  opacity: ${themeSetting === "dark" ? (isDark ? 1 : 0) : isDark ? 0 : 1};
  transition: opacity ${transitionDuration};
`;

const MountainShadow = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-55deg) translate(41%);
  transform-origin: 0% 50%;

  &::before {
    ${props =>
      mountainGradient(false, props.lightShadowColor, props.themeSetting)}
  }

  &::after {
    ${props =>
      mountainGradient(true, props.darkShadowColor, props.themeSetting)}
  }
`;

const MountainBlocker = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  height: 50%;
  width: 100%;
  background: ${props => props.theme.colorGround};
  transform: rotate(-45deg) scale(24, 1.65) translateY(25%);
  transition: background ${transitionDuration};
`;

const ThemeMountains = props => {
  const [mountains] = useState([
    { mountainSize: "120px", zIndex: 1, shiftLeft: "0" },
    { mountainSize: "90px", zIndex: 0, shiftLeft: "-50px" }
  ]);

  let [theme, setTheme] = useState("dark");

  const [darkTheme] = useState({
    colorSky: "#1a143c",
    colorGround: "#e3e0fb",
    colorMountain: "#cbcefe"
  });

  const [lightTheme] = useState({
    colorSky: "#399dfb",
    colorGround: "#ffffff",
    colorMountain: "#cbe6fe"
  });

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Card
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <Sky>
          <CardTitle>CSS Mountains</CardTitle>
          <CardDescription>The Ultimate Tutorial</CardDescription>
          <Button>Get Started</Button>
        </Sky>
        <Footer>
          <FooterMountains>
            {mountains.map(m => (
              <MountainStage
                mountainSize={m.mountainSize}
                zIndex={m.zIndex}
                shiftLeft={m.shiftLeft}
              >
                <MountainWrapper mountainSize={m.mountainSize}>
                  <MountainBackground mountainSize={m.mountainSize}>
                    <MountainShadow
                      themeSetting={theme}
                      lightShadowColor={lightTheme.colorMountain}
                      darkShadowColor={darkTheme.colorMountain}
                    />
                  </MountainBackground>
                  <MountainBlocker />
                </MountainWrapper>
              </MountainStage>
            ))}
          </FooterMountains>
        </Footer>
      </Card>
    </ThemeProvider>
  );
};

export default ThemeMountains;
