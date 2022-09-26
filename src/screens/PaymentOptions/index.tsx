import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import { Header } from '../../components'
import { STRINGS } from '../../utils/strings'
import PreferredPayment from './preferredPayment'
import CreditAndDebitCards from './creditDebitCards'
import MorePayment from './morePayment'

const PaymentOptions = () => {
  return (
    <View style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Header title={STRINGS.paymentOptions} onBackClick={()=>{}} /> */}
      <PreferredPayment />
      <CreditAndDebitCards />
      <MorePayment />
      </ScrollView>
    </View>
  )
}

export default PaymentOptions

const styles = StyleSheet.create({})