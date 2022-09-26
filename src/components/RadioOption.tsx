import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZE} from '../utils/theme';
import {commonStyles} from '../utils/commonStyles';

const RadioOption = ({
  selected,
  setSelected,
}: {
  selected: boolean;
  setSelected: (val: boolean) => void;
}) => {
  if (selected) {
    return (
      <Pressable
        style={[
          commonStyles.alignItemsCenter,
          commonStyles.justifyContentCenter,
          {
            borderRadius: 50,
            borderColor: COLORS.secondary,
            borderWidth: 2,
            height: SIZE.l,
            width: SIZE.l,
          },
        ]}
        // onPress={() => setSelected(false)}
      >
        <View
          style={[
            commonStyles.p4,
            {
              borderRadius: 50,
              backgroundColor: COLORS.secondary,
              // height: SIZE.sm,
              // width: SIZE.sm,
            },
          ]}
        />
      </Pressable>
    );
  }
  return (
    <Pressable
      style={{
        borderRadius: 50,
        borderColor: COLORS.secondary,
        borderWidth: 2,
        height: SIZE.l,
        width: SIZE.l,
      }}
      onPress={() => setSelected(true)}
    />
  );
};

export default RadioOption;

const styles = StyleSheet.create({});
