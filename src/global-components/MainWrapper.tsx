import { styled } from '../styles/stitches.config';

const MainWrapper = styled('main', {
  height: '100vh',
  width: '100%',
  overflow: 'auto',
  position: 'relative',
  '.content': {
    position: 'relative',
    zIndex: 2
  },
  '.container': {
    backgroundColor: '$siteBg',
    backgroundImage:
      'linear-gradient(rgba(169, 169, 169, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(169, 169, 169, 0.3) 1px, #ffffff 1px)',
    backgroundSize: '18px 18px',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nav: {
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    button: {
      margin: '0 8px',
      backgroundColor: '$siteBg',
      outline: '1px solid $secondary',
      borderRadius: '4px',
      padding: '0 8px',
      '&:hover': {
        backgroundColor: '$secondary',
        color: '$siteBg'
      }
    }
  },
  h1: {
    position: 'absolute',
    top: 12,
    left: 12,
    fontSize: '52px',
    fontWeight: 700
  },
  'label, input[type=radio]': {
    cursor: 'pointer',
    span: {
      display: 'inline-block',
      marginLeft: 4
    }
  }
});

export default MainWrapper;
