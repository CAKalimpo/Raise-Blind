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
      fontSize: 13,
      fontFamily: Fonts.ISM,
    },
    slider: {
      width: '95%',
      padding: 10,
      marginLeft: 12,
      height: 3,
    },
    bottomView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    bottomText: {
      fontFamily: Fonts.ISM,
      color: '#0099ff',
    },
    arrowR: {
      marginRight:15,
    },
    blindButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    BlindContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
    },
    BlindStructure: {
      flex: 1,
      backgroundColor: '#E3E1D9',
    },
    track: {
      height: 4,
      borderRadius: 2,
    },
    thumb: {
      width: 25, 
      height: 25, 
      backgroundColor: 'transparent'
    },
}
