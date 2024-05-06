import { Fonts } from './fonts';

export const styles = {
    container: {
        flex: 1,
        backgroundColor: '#E3E1D9',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -10,
    },
    textStyle: {
        fontFamily: Fonts.ISM,
    },
    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: 12,
        top: -10,
        marginLeft: 4,
    },
    number: {
        fontSize: 12,
        fontFamily: Fonts.ISM,
    },
    activeNumber: {
        color: '#03AED2',
    },
    slider: {
        width: '92%',
        height: 2,
        marginLeft: 20,
        padding: 5,
        top: -5,
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
        marginLeft: 10,
        fontSize: 14,
        color: '#22C3E6',
        marginTop: 18,
    },
    arrowR: {
        position: 'absolute',
        right: 68,
        top: 21,

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
        height: 3,
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
        marginLeft: 19,
        marginTop: -15,
    },
    mark: {
        width: 10,
        height: 10,
        backgroundColor: '#22C3E6',
        borderRadius: 20,
    },
    selectedMark: {
        backgroundColor: 'transparent',
    },

};
