import React from 'react';
import { View, Text, Switch, Image, StyleSheet } from 'react-native';
import arrowRight from '../imgs/arrow.png';
import Slider from 'react-native-slider';
import { styles } from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import States from './States';

const RaiseBlind = ({ navigation }) => {
  const {
    raiseBlind,
    raiseBlindInterval,
    isSliding,
    toggleBlind,
    handleSliderComplete,
    setRaiseBlindInterval,
    setIsSliding
  } = States(); // Use the custom hook

  const navigateBlinds = () => {
    navigation.navigate('Blinds Structure', {
      raiseBlind: raiseBlind,
      raiseBlindInterval: raiseBlindInterval
    });
  };

  const handleSliderStart = () => {
    setIsSliding(true);
  };

  // Function to generate marks based on slider min, max, and step
  const generateMarks = () => {
    const marks = [];
    for (let i = 3; i <= 7; i += 2) {
      marks.push(
        <View key={i} style={[styles.mark, i === raiseBlindInterval ? styles.selectedMark : null]} />
      );
    }
    return marks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>Blind Level Length</Text>
          <Switch
            style={styles.toggleSwitch}
            trackColor={{ false: '#767577', true: '#22C3E6' }}
            thumbColor={raiseBlind ? '#2D9596' : '#f4f3f4'}
            onValueChange={toggleBlind}
            value={raiseBlind}
          />
        </View>
        <View style={styles.numbersContainer}>
          <Text style={[styles.number, raiseBlindInterval === 3 ? styles.activeNumber : null]}>3m</Text>
          <Text style={[styles.number, raiseBlindInterval === 5 ? styles.activeNumber : null]}>5m</Text>
          <Text style={[styles.number, raiseBlindInterval === 7 ? styles.activeNumber : null]}>7m</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            value={raiseBlindInterval}
            minimumValue={3}
            maximumValue={7}
            step={2}
            minimumTrackTintColor="#22C3E6"
            maximumTrackTintColor="#E3E1D9"
            onValueChange={value => setRaiseBlindInterval(value)}
            onSlidingStart={handleSliderStart}
            onSlidingComplete={handleSliderComplete}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
            thumbImage={require('../imgs/chip.png')}
          />
          <View style={styles.markContainer}>
            {generateMarks()}
          </View>
        </View>
        <TouchableOpacity onPress={navigateBlinds}>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>
              Blinds Structure
            </Text>
              <Image source={arrowRight} style={styles.arrowR}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RaiseBlind;
