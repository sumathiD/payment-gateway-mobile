import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import OutlineButton from './OutlineButton'
import { COLORS } from '../../utils/theme'

const FilledButton = ({label, containerStyle,labelStyle, type}:{
    label:string, containerStyle?: ViewStyle,labelStyle?: TextStyle,
    type?: 'm'|'l'|'xl'
}) => {
  return (
    <OutlineButton 
    label={label}
    type={type|| 'm'}
    containerStyle={{...containerStyle,
    backgroundColor:COLORS.primary}}
    labelStyle={{...labelStyle, color: COLORS.white}}
    />
  )
}

export default FilledButton

const styles = StyleSheet.create({})