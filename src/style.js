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
    color: '#70c6ff'
  },
  slider: {
    width: '92%',
    height: 5,
    marginLeft: 15,
    padding: 5,
  },
  slideContainer: {
    alignItems: 'center',
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bottomText: {
    fontFamily: Fonts.ISM,
    color: '#0099ff',
    marginTop: 5,
  },
  arrowR: {
    marginRight: 15,
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
    width: 30, 
    height: 40, 
    backgroundColor: 'transparent',
    left: -5,
  },
  toggleSwitch: {
    transform: [{ scaleX: 1.1 }],
  },
  markContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 16,
    marginTop: -11,
  },
  mark: {
    width: 13,
    height: 13,
    backgroundColor: '#70c6ff',
    borderRadius: 20,
  },
  selectedMark: {
    backgroundColor: 'transparent',
  },
};
