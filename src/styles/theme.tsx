import { darken, lighten } from 'polished';

export const theme = {
  font: {
    family: {
      base: 'Open Sans',
      title: 'Lato',
    },
    weight: {
      base: '400',
      bold: '700',
    },
    size: {
      extraSmall: '0.694rem',
      small: '0.833rem',
      base: '1rem', // 16px because of fontsize at html
      big: '1.2rem',
      extraBig: '1.44rem',
    },
  },
  colors: {
    // primary: '#00cc99',
    // primary: '#00ccbb',
    // primary: '#e66b8c',
    primary: '#611f69',
    get primaryDark() {
      return darken(0.05, this.primary);
    },
    get primaryLight() {
      return lighten(0.05, this.primary);
    },
    secondary: '#62A639',
    red: '#f14c52',
    blue: '#0645AD',
    grey10: '#e5ebee',
    grey15: '#bbcdd8',
    grey20: '#7b93a4',
    grey30: '#212529',
    white: '#fff',
    black: '#324c5b',
    green: '#00AA18',
    orange: '#F48200',
    facebook: '#3b5998',
    google: '#fff',
  },
  borderRadius: '4px',
  spacing: {
    none: '0rem',
    small: '0.5rem',
    normal: '1rem',
    big: '2rem',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  shadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
  avatar: {
    sizes: {
      xs: '2rem',
      sm: '3rem',
      md: '4rem',
      lg: '5rem',
      xl: '10rem',
    },
    fallback: {
      sizes: {
        xs: '0.8rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '4rem',
      },
    },
  },
  badge: {
    padding: {
      sm: '0.25rem 0.5rem',
      md: '0.333rem 0.666rem',
      lg: '0.5rem 1rem',
    },
  },
  button: {
    height: {
      small: '2.5rem',
      normal: '3rem',
    },
  },
} as const;
