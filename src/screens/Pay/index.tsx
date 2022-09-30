import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import {STRINGS} from '../../utils/strings';
import {FilledButton, Header} from '../../components';
import {COLORS, SCREEN_WIDTH, SIZE} from '../../utils/theme';

const Pay = ({navigation, route}: any) => {
  const title = route.params?.title || STRINGS.wallets;
  return (
    <View style={[commonStyles.container]}>
      <Header
        title={title}
        onBackClick={() => {
          navigation.pop();
        }}
      />
      <View style={[commonStyles.m12]}>
        <Text
          style={{color: COLORS.primary, fontSize: SIZE.m, fontWeight: '700'}}>
          {title}
        </Text>
        <FilledButton
          label={STRINGS.pay + ' ₹200'}
          containerStyle={{
            maxWidth: SCREEN_WIDTH * 0.35,
            marginTop: SIZE.l,
            marginLeft: -SIZE.xs,
            borderRadius: 8,
          }}
          labelStyle={{
            fontSize: SIZE.m,
          }}
        />
      </View>
    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({});
