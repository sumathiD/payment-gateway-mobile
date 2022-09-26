import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZE} from '../utils/theme';
import {commonStyles} from '../utils/commonStyles';

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={[styles.container, commonStyles.pv4, commonStyles.ph12]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZE.m,
    elevation: 1,
    backgroundColor: COLORS.white,
    position: 'relative',
  },
});
