import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import {STRINGS} from '../../utils/strings';
import {FilledButton, Header, OutlineButton} from '../../components';
import {COLORS, SCREEN_WIDTH, SIZE} from '../../utils/theme';
import {useFormik} from 'formik';

const initialValues = {
  cardNumber: '',
  valid: '',
  cvv: '',
  name: '',
};
const AddCard = () => {
  const addCardForm = useFormik({
    initialValues,
    onSubmit: () => {},
  });
  return (
    <View style={[commonStyles.container]}>
      {/* <Header title={STRINGS.creditAndDebitCard} onBackClick={() => {}} /> */}
      <View style={[commonStyles.p18, commonStyles.flex1]}>
        <Text
          style={{color: COLORS.primary, fontSize: SIZE.l, fontWeight: '700'}}>
          {STRINGS.creditAndDebitCard}
        </Text>

        <View style={[commonStyles.mv12,{}]}>
          <TextInput
            value={addCardForm.values.cardNumber}
            placeholder={STRINGS.cardNumber + '*'}
            onChangeText={addCardForm.handleChange('cardNumber')}
            onBlur={addCardForm.handleBlur('cardNumber')}
            style={styles.input}
          />
          <View
            style={[
              commonStyles.flexDirectionRow,
              commonStyles.justifyContentSpaceBetween,
            ]}>
            <TextInput
              value={addCardForm.values.valid}
              placeholder={STRINGS.validThroughMMYY + '*'}
              onChangeText={addCardForm.handleChange('valid')}
              onBlur={addCardForm.handleBlur('valid')}
              style={[styles.input,commonStyles.flex3]}
            />

            <TextInput
              value={addCardForm.values.cvv}
              placeholder={STRINGS.cvv + '*'}
              onChangeText={addCardForm.handleChange('cvv')}
              onBlur={addCardForm.handleBlur('cvv')}
              style={[styles.input,commonStyles.flex1,commonStyles.ml18]}
            />
          </View>

          <TextInput
            value={addCardForm.values.name}
            placeholder={STRINGS.nameOnCard}
            onChangeText={addCardForm.handleChange('name')}
            onBlur={addCardForm.handleBlur('name')}
            style={styles.input}
          />
        </View>
        <View style={[{marginTop: - SIZE.xl},commonStyles.ml18]}>
        <Text style={{color: COLORS.secondaryText}}>
          {STRINGS.mandatoryFields}
        </Text>
        </View>
      </View>
      <View style={[commonStyles.flexDirectionRow,commonStyles.justifyContentSpaceBetween]}>
            <OutlineButton
            label={STRINGS.reset}
            containerStyle={{
              width: SCREEN_WIDTH*0.45,
              paddingVertical: SIZE.m
            }}
            />
            <FilledButton
            label={STRINGS.proceed}
            containerStyle={{
              width: SCREEN_WIDTH*0.45,
              paddingVertical: SIZE.m
            }}
            />
      </View>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1, borderColor: COLORS.grey2,
    borderRadius: SIZE.sm,
    marginBottom: SIZE.xl,
    paddingLeft: SIZE.m
  }
});
