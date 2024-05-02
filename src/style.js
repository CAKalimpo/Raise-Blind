import { Fonts } from './fonts';
export const styles = {
    container: {
      flex: 1,
      backgroundColor: '#E3E1D9',
      alignItems: 'center',
    },
    card: {
      backgroundColor: 'white',
      padding: 10,
      width: '100%',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textStyle: {
      fontFamily: Fonts.ISM,
    },
    numbersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    number: {
      fontSize: 12,
      fontFamily: Fonts.ISM,
    },
    slider: {
      width: '100%',
    },
    bottomView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    bottomText: {
      fontFamily: Fonts.ISM,
      color: '#008DDA',
      marginTop: 5,
    },
    arrowR: {
      margin: 5,
    },
    blindButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    raiseBlindContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    },
}
