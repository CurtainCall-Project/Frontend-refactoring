import {type} from "os";
import {css, DefaultTheme} from "styled-components";

const calcRem = (size: number) => `${size / 16}rem`;

const colors = {
  purple: "#6166b3",
  lightPurple: "#baabda",
  white: "#ffffff",
  navInnerMenuGray: "#fafafa",
  textGray: "#595858",
  borderGray: "#eaeaea",
  lightGray: "#f0f0f0",
  darkGray: "#e1e1e1",
  inputGray: "#dbdbdb",
};

const fontSize = {
  lg: calcRem(20),
  base: calcRem(16),
  sm: calcRem(14),
  xs: calcRem(12),
  xxs: calcRem(10),
};

const verticalCenter = css`
  display: flex;
  align-items: center;
`;

const deviceSize = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "480px",
};

const device = {
  desktop: `only screen and (max-width: ${deviceSize.desktop})`,
  tablet: `only screen and (max-width: ${deviceSize.tablet})`,
  mobile: `only screen and (max-width: ${deviceSize.mobile})`,
};

export type Colors = typeof colors;
export type FontSize = typeof fontSize;
export type DeviceSize = typeof deviceSize;
export type Device = typeof device;

const theme = {
  colors,
  fontSize,
  deviceSize,
  device,
};

export default theme;
