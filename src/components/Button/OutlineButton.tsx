import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS, SIZE } from '../../utils/theme'
import { commonStyles } from '../../utils/commonStyles'

const OutlineButton = ({label, containerStyle,labelStyle, type}:{
    label:string, containerStyle?: ViewStyle,labelStyle?: TextStyle,
    type?: 'm'|'l'|'xl'
}) => {
    const getType = (type:string) => {
        return SIZE[type]
    }
  return (
    <Pressable
    style={[
        commonStyles.m8,
        commonStyles.p8,
        {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: SIZE.m,
        ...containerStyle
    }]}
    >
      <Text
      style={[
        commonStyles.textCenter,
        {
        fontSize: SIZE.l,
        color: COLORS.primary,
        ...labelStyle,
      }]}
      >{label}</Text>
    </Pressable>
  )
}

export default OutlineButton

const styles = StyleSheet.create({})