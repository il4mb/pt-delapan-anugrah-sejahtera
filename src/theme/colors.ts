import { blue } from "@mui/material/colors";
import { gray, green, orange, red, navy } from "./themePrimitives";
import { Theme } from "@mui/material";

const colors = { primary: navy, secondary: gray, success: green, error: red, warning: orange, info: blue } as const;

export type ColorName = keyof typeof colors;
export const colorsName = Object.keys(colors) as ColorName[];

export const getColor = (name: ColorName) => {
    return colors[name] || navy;
}
