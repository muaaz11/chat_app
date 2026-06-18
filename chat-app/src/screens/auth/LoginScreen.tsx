import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  ActivityIndicator,
  TextInput,
} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { lightTheme, typography, spacing, radius, shadows } from '../../shared/constants/theme'

type RootStackParamList = {
  Login: undefined
  Register: undefined
}

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<'email' | 'password' | null>(null)

  const colors = lightTheme.colors

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(text)
  }

  const handleLogin = () => {
    let newErrors = { email: '', password: '' }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)

    if (!newErrors.email && !newErrors.password) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        // Navigate to main app
      }, 1500)
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: spacing.base,
      paddingTop: spacing['4xl'],
      paddingBottom: spacing.xl,
    },
    // Header Section
    headerSection: {
      alignItems: 'center',
      marginBottom: spacing['3xl'],
    },
    logoContainer: {
      width: 96,
      height: 96,
      borderRadius: radius.xl,
      backgroundColor: colors.primaryLight,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.xl,
      ...shadows.md,
    },
    logoText: {
      fontSize: typography.size['3xl'],
      fontWeight: typography.weight.bold,
      color: colors.primary,
    },
    title: {
      fontSize: typography.size['3xl'],
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: typography.size.base,
      fontWeight: typography.weight.regular,
      color: colors.textSecondary,
      textAlign: 'center',
      maxWidth: '80%',
    },
    // Form Section
    formSection: {
      marginBottom: spacing.xl,
    },
    inputContainer: {
      marginBottom: spacing.lg,
    },
    label: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.medium,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputBackground,
      borderWidth: 2,
      borderColor: errors.email || errors.password 
        ? colors.error 
        : focusedField 
          ? colors.inputBorderFocus 
          : colors.inputBorder,
      borderRadius: radius.md,
      paddingHorizontal: spacing.base,
      paddingVertical: Platform.OS === 'ios' ? spacing.base : spacing.sm,
      // transitionDuration: '200ms',
    },
    input: {
      flex: 1,
      fontSize: typography.size.base,
      color: colors.inputText,
      padding: 0,
      height: Platform.OS === 'ios' ? 40 : 36,
    },
    errorText: {
      fontSize: typography.size.xs,
      color: colors.error,
      marginTop: spacing.xs,
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: spacing.lg,
    },
    forgotPasswordText: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.semibold,
      color: colors.primary,
    },
    loginButton: {
      backgroundColor: colors.primary,
      paddingVertical: spacing.base,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: spacing.sm,
      ...shadows.primaryGlow,
      height: 56,
    },
    loginButtonDisabled: {
      backgroundColor: colors.textTertiary,
      ...shadows.none,
    },
    loginButtonText: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.semibold,
      color: colors.textOnPrimary,
      letterSpacing: 0.5,
    },
    // Divider
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: spacing.xl,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: colors.border,
    },
    dividerText: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.medium,
      color: colors.textTertiary,
      paddingHorizontal: spacing.base,
    },
    // Social Buttons
    socialButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: spacing.base,
      marginBottom: spacing.xl,
    },
    socialButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: radius.md,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.base,
      maxWidth: '48%',
      height: 48,
    },
    socialButtonText: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.medium,
      color: colors.textPrimary,
      marginLeft: spacing.xs,
    },
    // Footer Section
    footerSection: {
      alignItems: 'center',
      paddingTop: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    footerTextContainer: {
      flexDirection: 'row',
      gap: spacing.xs,
      alignItems: 'center',
    },
    footerText: {
      fontSize: typography.size.base,
      fontWeight: typography.weight.regular,
      color: colors.textSecondary,
    },
    signupLink: {
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      color: colors.accent,
    },
  })

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>💬</Text>
          </View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue your conversations
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={colors.inputPlaceholder}
                value={email}
                onChangeText={(text) => {
                  setEmail(text)
                  if (errors.email) setErrors({ ...errors, email: '' })
                }}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!loading}
                style={styles.input}
              />
            </View>
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={colors.inputPlaceholder}
                value={password}
                onChangeText={(text) => {
                  setPassword(text)
                  if (errors.password) setErrors({ ...errors, password: '' })
                }}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                secureTextEntry
                editable={!loading}
                style={styles.input}
              />
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {/* Handle forgot password */}}
            disabled={loading}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loginButton,
              loading && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color={colors.textOnPrimary} size="small" />
            ) : (
              <Text style={styles.loginButtonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Divider with OR text */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity 
            style={styles.socialButton}
            disabled={loading}
            activeOpacity={0.7}
          >
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialButton}
            disabled={loading}
            activeOpacity={0.7}
          >
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={styles.footerSection}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.replace('Register')}
              disabled={loading}
            >
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default LoginScreen