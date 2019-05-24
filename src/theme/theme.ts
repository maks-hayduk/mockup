interface ITheme {
  blackColor: string;
  buttonActiveColor: string;
  buttonColor: string;
  mainColor: string;
  whiteColor: string;
  breakpoints: string[];
}

const theme: ITheme = {
  blackColor: 'black',
  buttonActiveColor: '#d6d6d6',
  buttonColor: '#e5e5e5',
  mainColor: '#e8e7e7',
  whiteColor: 'white',
  breakpoints: ['722px']
};

export default theme;
