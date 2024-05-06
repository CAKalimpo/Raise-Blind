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
    activeNumber: {
      color: '#0099ff'
    },
    slider: {
      width: '88%',
      padding: 10,
      marginLeft: 22,
      marginRight: 22,
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
      width: 40, 
      height: 40, 
      backgroundColor: 'transparent',
      margin: 0
    },
    markerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    markerText: {
      color: '#000', // adjust color as needed
      fontSize: 14, // adjust font size as needed
    },
    marker: {
      width: 10, // adjust width as needed
      height: 10, // adjust height as needed
      backgroundColor: '#0099ff', // adjust background color as needed
      borderRadius: 5, // ensure the marker is round
      marginTop: -6, // adjust vertical position as needed to align with the slider
    },
}
