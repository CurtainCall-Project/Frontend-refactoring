import "styled-components";
import {Colors, FontSize, DeviceSize, Devices} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fontSize: FontSize;
    deviceSize: DeviceSize;
    device: Devices;
  }
}
