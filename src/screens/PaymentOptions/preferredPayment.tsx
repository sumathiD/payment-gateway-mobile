import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {STRINGS} from '../../utils/strings';
import {COLORS, SCREEN_WIDTH, SIZE} from '../../utils/theme';
import {commonStyles} from '../../utils/commonStyles';
import {
  Card,
  FilledButton,
  IconContaniner,
  PaymentRow,
  RadioOption,
} from '../../components';
import {LOCAL_IMAGES} from '../../utils/images';

const PreferredPayment = () => {
  const [selctedPayment, setSelctedPayment] = useState<
    'phonepe' | 'paytm' | ''
  >('phonepe');
  const isPhonepe = selctedPayment === 'phonepe';
  const isPaytm = selctedPayment === 'paytm';

  return (
    <View style={commonStyles.m24}>
      <Text style={[styles.title, commonStyles.mb8]}>{STRINGS.preferredPayment}</Text>
      <Card>
        <PaymentRow
        onPress={()=>{
          setSelctedPayment('phonepe')
        }}
          leftIcon={
            <IconContaniner>
              <Image
                source={LOCAL_IMAGES.phonepe}
                style={{
                  width: SIZE.xl,
                  height: SIZE.xl,
                }}
              />
            </IconContaniner>
          }
          label={'Vishnucruise13@okaxis'}
          rightIcon={
            <RadioOption
              selected={isPhonepe}
              setSelected={value => {
                setSelctedPayment('phonepe');
              }}
            />
          }
        />
        <FilledButton label={STRINGS.pay + ' ₹200'} />
        <View
          style={[
            commonStyles.mv8,
            {
              width: SCREEN_WIDTH * 0.89,
              borderWidth: StyleSheet.hairlineWidth,
              marginHorizontal: -20,
              borderStyle: 'dashed',
              borderColor: COLORS.grey,
            },
          ]}
        />
        <PaymentRow
        onPress={()=>{
          setSelctedPayment('paytm')
        }}
          leftIcon={
            <IconContaniner>
              <Image
                source={LOCAL_IMAGES.paytm}
                style={{
                  width: SIZE.xl,
                  height: SIZE.xl,
                  resizeMode: 'contain',
                }}
              />
            </IconContaniner>
          }
          label={STRINGS.paytm}
          rightIcon={
            <RadioOption
              selected={isPaytm}
              setSelected={value => {
                setSelctedPayment('paytm');
              }}
            />
          }
        />
      </Card>
    </View>
  );
};

export default PreferredPayment;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: SIZE.l,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
