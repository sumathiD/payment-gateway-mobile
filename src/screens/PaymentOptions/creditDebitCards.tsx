import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import { COLORS, SIZE } from '../../utils/theme'
import { Card, IconContaniner, PaymentRow } from '../../components'
import { STRINGS } from '../../utils/strings'
import { LOCAL_IMAGES } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'

const CreditAndDebitCards = () => {
  const navigation = useNavigation();
  return (
    <View style={[commonStyles.mb12, commonStyles.mh24]}>
      <Text style={[styles.title,commonStyles.mb8]}>{STRINGS.creditAndDebitCard}</Text>
      <Card>
      <PaymentRow
      onPress={()=>{
        navigation.navigate('AddCard')
      }}
          leftIcon={
            <IconContaniner>
              <Image
                source={LOCAL_IMAGES.plusicon}
                style={{
                  width: SIZE.m,
                  height: SIZE.m,
                }}
              />
            </IconContaniner>
          }
          label={STRINGS.enterCardDetails}
        />
      </Card>
      </View>
  )
}

export default CreditAndDebitCards

const styles = StyleSheet.create({
    title: {
        fontSize: SIZE.l,
        color: COLORS.primary,
        fontWeight: '600',
      }
})