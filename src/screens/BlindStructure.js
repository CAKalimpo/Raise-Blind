import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style';

const BlindsStructure = ({ route }) => {
  const { raiseBlind, raiseBlindInterval } = route.params;

  return (
    <View style={styles.BlindStructure}>
    <View style={styles.BlindContainer}>
      <Text style={styles.textStyle}>Blind Enable: {raiseBlind ? 'Yes' : 'No'}</Text>
      <Text style={styles.textStyle}>Blind Interval: {raiseBlindInterval}</Text>
    </View>

    </View>
  );
};

export default BlindsStructure;
