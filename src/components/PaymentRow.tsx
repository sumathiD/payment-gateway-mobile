import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/commonStyles';
import {COLORS, SIZE} from '../utils/theme';

const PaymentRow = ({
  leftIcon,
  label,
  rightIcon,
  onPress
}: {
  leftIcon: React.ReactNode;
  label: string;
  rightIcon?: React.ReactNode;
  onPress?:() => void;
}) => {
  return (
    <Pressable
    onPress={onPress&&onPress}
      style={[
        commonStyles.flexDirectionRow,
        commonStyles.justifyContentSpaceBetween,
        commonStyles.alignItemsCenter,
      ]}>
        <View style={[commonStyles.flexDirectionRow, commonStyles.alignItemsCenter]}>
      {leftIcon}
      <Text style={[
        commonStyles.pl12,
        {fontSize: SIZE.l, color: COLORS.secondaryText}]}>
        {label}
      </Text>
      </View>
      {rightIcon!== undefined&& rightIcon}
    </Pressable>
  );
};

export default PaymentRow;
