import { View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS, SIZE } from '../utils/theme';
import { commonStyles } from '../utils/commonStyles';

const IconContaniner = ({children, containerStyle}: {children: React.ReactNode,containerStyle?: ViewStyle}) => {
    return (
      <View
        style={[
          commonStyles.p12,
          commonStyles.mv8,
          {borderRadius: SIZE.m, borderColor: COLORS.black, borderWidth: 1,
          ...containerStyle
          },
        ]}>
        {children}
      </View>
    );
  };

export default IconContaniner