import { StyleSheet, TextInput, View, ViewStyle, TextInputProps as RNTextInputProps } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme';

interface TextInputComponentProps extends RNTextInputProps {
  icon?: React.ReactNode
  containerStyle?: ViewStyle
  inputStyle?: any
  error?: boolean
  errorMessage?: string
  label?: string
}

const TextInputComponent = (props: TextInputComponentProps) => {
  const { icon, containerStyle, error, label, ...restProps } = props
  const [isFocused, setIsFocused] = useState(false)
  const theme = useTheme()

  const dynamicStyles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    labelText: {
      fontSize: theme.typography.size.sm,
      fontWeight: theme.typography.weight.medium,
      color: error ? theme.colors.error : theme.colors.textPrimary,
      marginBottom: theme.spacing.xs,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.inputBackground,
      borderWidth: 1.5,
      borderColor: error 
        ? theme.colors.error 
        : isFocused 
        ? theme.colors.borderFocus 
        : theme.colors.inputBorder,
      borderRadius: theme.radius.md,
      paddingHorizontal: theme.spacing.base,
      paddingVertical: theme.spacing.sm,
    },
    input: {
      flex: 1,
      fontSize: theme.typography.size.base,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.inputText,
      marginLeft: icon ? theme.spacing.sm : 0,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize: theme.typography.size.xs,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.error,
      marginTop: theme.spacing.xs,
    },
  })

  return (
    <View style={[dynamicStyles.container, containerStyle]}>
      {label && (
        <View style={{ marginBottom: theme.spacing.xs }}>
          <View style={dynamicStyles.labelText}>
            {label}
          </View>
        </View>
      )}
      <View style={dynamicStyles.inputContainer}>
        {icon && <View style={dynamicStyles.iconContainer}>{icon}</View>}
        <TextInput
          style={[dynamicStyles.input, props.inputStyle]}
          placeholderTextColor={theme.colors.inputPlaceholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...restProps}
        />
      </View>
      {error && errorMessage && (
        <View style={dynamicStyles.errorText}>
          {errorMessage}
        </View>
      )}
    </View>
  )
}

export default TextInputComponent

const styles = StyleSheet.create({})