type ColorMap = Record<string, { back: string; text: string }>;

export const Colors = {
  whitesmoke: '#FAFAFA',
  whitesmokeHint: '#F5F5F5',
  white: '#FFF',
  black: '#000',
  primary: '#0000FF',
  gray: '#A4A4A4',
  grayStrong: '#575757',
  hintGray: '#616161',
  lightGray: '#a4acaf',
  red: '#f00',
  orange: '#ff7f0e',
  green: '#a0e515',
  grayForArrows: '#d4d4d4',
  grayToBorder: '#DEDEDE',
  lightGrayToLabelCountTextArea: '#CDCDCD',
  grayForPrivacyPolicy: '#999999',
};

export const PokemonTypesColors: ColorMap = {
  BUG: {
    back: '#729f3f',
    text: Colors.white,
  },
  DRAGON: {
    back: '#f16e57',
    text: Colors.white,
  },
  FAIRY: {
    back: '#fdb9e9',
    text: Colors.black,
  },
  FIRE: {
    back: '#fd7d24',
    text: Colors.white,
  },
  GHOST: {
    back: '#7b62a3',
    text: Colors.white,
  },
  GROUND: {
    back: '#ab9842',
    text: Colors.black,
  },
  NORMAL: {
    back: '#a4acaf',
    text: Colors.black,
  },
  PSYCHIC: {
    back: '#f366b9',
    text: Colors.white,
  },
  STEEL: {
    back: '#9eb7b8',
    text: Colors.black,
  },
  DARK: {
    back: '#707070',
    text: Colors.white,
  },
  ELECTRIC: {
    back: '#eed535',
    text: Colors.white,
  },
  FIGHTING: {
    back: '#d56723',
    text: Colors.white,
  },
  FLYING: {
    back: '#3dc7ef',
    text: Colors.white,
  },
  GRASS: {
    back: '#9bcc50',
    text: Colors.black,
  },
  ICE: {
    back: '#51c4e7',
    text: Colors.black,
  },
  POISON: {
    back: '#b97fc9',
    text: Colors.white,
  },
  ROCK: {
    back: '#a38c21',
    text: Colors.white,
  },
  WATER: {
    back: '#4592c4',
    text: Colors.white,
  },
};
