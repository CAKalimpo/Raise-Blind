import React from 'react';
import { View, Text, Switch, Slider, Image } from 'react-native';
import arrowRight from '../imgs/arrow.png';
import { styles } from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';


const RaiseBlind = ({navigation}) => {
  const [raiseBlind, isRaiseBlind] = React.useState(false);
  const toggleBlind = () => isRaiseBlind(previousState => !previousState);


  const navigateBlinds = () => {
    navigation.navigate('Blinds Structure')
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>Blind Level Length</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#008DDA' }}
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
            minimumValue={3}
            maximumValue={7}
            minimumTrackTintColor="#008DDA"
            maximumTrackTintColor="#000000"
            thumbTintColor="#008DDA"
            step={2} 
            thumbImage={require('../imgs/chips.png')}
          />
        </View>
        <TouchableOpacity onPress={navigateBlinds}>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            Blind Structure
          <Image source={arrowRight}/>
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RaiseBlind;
