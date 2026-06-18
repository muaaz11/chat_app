import { StyleSheet, TextInput, View, ViewStyle, TextInputProps as RNTextInputProps } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme';
import {spacing, typography, palette, radius} from '../constants/theme'

interface TextInputComponentProps extends RNTextInputProps {
  icon?: React.ReactNode
  containerStyle?: ViewStyle
  inputStyle?: any
  errorMessage?: string
  label?: string
}

const TextInputComponent = (props: TextInputComponentProps) => {
  const { icon, containerStyle,errorMessage, label, ...restProps } = props
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={{ marginBottom: spacing.xs }}>
          <View style={styles.labelText}>
            {label}
          </View>
        </View>
      )}
      <View style={styles.inputContainer}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[styles.input, props.inputStyle]}
          placeholderTextColor={palette.gray400}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...restProps}
        />
      </View>
    </View>
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
  container: {
      marginBottom: spacing.md,
    },
    labelText: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.medium,
      marginBottom: spacing.xs,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor:palette.inputBackground,
      borderWidth: 1.5,
      borderRadius:radius.md,
      paddingHorizontal:spacing.base,
      paddingVertical:spacing.sm,
    },
    input: {
      flex: 1,
      fontSize:typography.size.base,
      fontWeight:typography.weight.regular,
      color:palette.gray100,
      // marginLeft: icon ?spacing.sm : 0,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize:typography.size.xs,
      fontWeight:typography.weight.regular,
      color:palette.error,
      marginTop:spacing.xs,
    },
})