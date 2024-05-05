import React from 'react';
import { View, Text, Switch, Image } from 'react-native';
import arrowRight from '../imgs/arrow.png';
import Slider from 'react-native-slider';
import { styles } from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RaiseBlind = ({ navigation }) => {
  const [raiseBlind, setRaiseBlind] = React.useState(false);
  const [raiseBlindInterval, setRaiseBlindInterval] = React.useState(0);

  const toggleBlind = () => setRaiseBlind(previousState => !previousState);

  const navigateBlinds = () => {
    navigation.navigate('Blinds Structure', {
      raiseBlind: raiseBlind,
      raiseBlindInterval: raiseBlindInterval
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>Blind Level Length</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#0099ff' }}
            thumbColor={raiseBlind ? '#2D9596' : '#f4f3f4'}
            onValueChange={toggleBlind}
            value={raiseBlind}
          />
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.number}>3m</Text>
          <Text style={styles.number}>5m</Text>
          <Text style={styles.number}>7m</Text>
        </View>
        <View style={styles.sliderContainer}>
        <Slider
        style={styles.slider}
        min={3}
        max={7}
        step={1}
        minimumTrackTintColor="#0099ff"
        maximumTrackTintColor="#E3E1D9"
        onValueChange={value => setRaiseBlindInterval(value)}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        thumbImage={require('../imgs/chip.png')} // Replace with your image path
      />
        </View>
        <TouchableOpacity onPress={navigateBlinds}>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>
              Blinds Structure
              <Image source={arrowRight} style={styles.arrowR}/>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RaiseBlind;
