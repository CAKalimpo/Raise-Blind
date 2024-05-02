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
    sliderFrontContainer: {
      height: 5,
      borderRadius: 10,
      backgroundColor: '#008DDA',
      margin: 15,
    },
    sliderBackContainer: {
      height: 5,
      borderRadius: 10,
      backgroundColor: '#008DDA',
      margin: 15,
      position: 'absolute',
    },
    bottomView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    bottomText: {
      fontFamily: Fonts.ISM,
      color: '#008DDA',
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
    thumb: {
      left: -8,
      top: -8,
      width: 20,
      height: 20,
      backgroundColor: 'white',
      borderColor: '#008DDA',
      borderWidth: 5,
      borderRadius: 10,
    }
}
