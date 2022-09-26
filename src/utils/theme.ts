import { Dimensions } from "react-native"

const COLORS = {
    primary: '#040748',
    secondary: '#19A672',
    white: '#fff',
    black: '#000',
    secondaryText: '#444652',
    grey: '#D9DFED',
    grey2: '#B6B6B6'
}

const SIZE = {
    xs: 4,
    sm: 8,
    m: 12,
    l: 18,
    xl: 24,
    xxl: 32,
    xxxl: 64
}
const {height, width} = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export {
    COLORS, SIZE, SCREEN_WIDTH, SCREEN_HEIGHT
}