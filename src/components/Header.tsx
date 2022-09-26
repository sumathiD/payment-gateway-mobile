import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../utils/commonStyles';
import {COLORS, SIZE} from '../utils/theme';
import {BackIcon} from '../utils/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({
  title,
  onBackClick,
}: {
  title: string;
  onBackClick: () => void;
}) => {
  return (
    <View
      style={[
        commonStyles.flexDirectionRow,
        styles.headerContainer,
        commonStyles.alignItemsCenter,
        commonStyles.p12,
      ]}>
      <BackIcon
        onPress={onBackClick}
        size={SIZE.xl}
        style={{color: '#fff', fontSize: 22, overflow: 'hidden', marginLeft: -4, zIndex: 999999}}
      />

      <Text
        style={[
          commonStyles.textCenter,
          commonStyles.flex1,
          {color: COLORS.white, fontSize: SIZE.l, left: -SIZE.xxl},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZE.m,
    borderBottomRightRadius: SIZE.m,
  },
});
