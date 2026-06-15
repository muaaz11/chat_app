import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../../shared/hooks/useTheme'
import TextInputComponent from '../../../shared/components/input'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

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
      // Simulate login process
      setTimeout(() => {
        setLoading(false)
        // Navigate to main app
      }, 1500)
    }
  }

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    keyboardAvoid: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingTop: theme.spacing['3xl'],
      paddingBottom: theme.spacing.base,
    },
    headerSection: {
      paddingHorizontal: theme.spacing.base,
      paddingBottom: theme.spacing['3xl'],
      alignItems: 'center',
    },
    title: {
      fontSize: theme.typography.size['3xl'],
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      fontSize: theme.typography.size.base,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    formSection: {
      paddingHorizontal: theme.spacing.base,
    },
    inputContainer: {
      marginBottom: theme.spacing.lg,
    },
    loginButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.base,
      borderRadius: theme.radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing.xl,
      ...theme.shadows.primaryGlow,
    },
    loginButtonText: {
      fontSize: theme.typography.size.md,
      fontWeight: theme.typography.weight.semibold,
      color: theme.colors.textOnPrimary,
    },
    loginButtonDisabled: {
      backgroundColor: theme.colors.textTertiary,
    },
    footerSection: {
      paddingHorizontal: theme.spacing.base,
      alignItems: 'center',
      paddingBottom: theme.spacing.lg,
    },
    footerText: {
      fontSize: theme.typography.size.base,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.textSecondary,
    },
    signupLink: {
      fontSize: theme.typography.size.base,
      fontWeight: theme.typography.weight.semibold,
      color: theme.colors.accent,
    },
    footerTextContainer: {
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: theme.spacing.xl,
      gap: theme.spacing.base,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: theme.colors.border,
    },
    dividerText: {
      fontSize: theme.typography.size.sm,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.textTertiary,
    },
  })

  return (
    <KeyboardAvoidingView 
      style={dynamicStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={dynamicStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={dynamicStyles.headerSection}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: theme.colors.primaryLight,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: theme.spacing.xl,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: theme.typography.weight.bold,
                color: theme.colors.primary,
              }}
            >
              💬
            </Text>
          </View>
          <Text style={dynamicStyles.title}>Welcome Back</Text>
          <Text style={dynamicStyles.subtitle}>
            Sign in to your account to continue chatting
          </Text>
        </View>

        {/* Form Section */}
        <View style={dynamicStyles.formSection}>
          <View style={dynamicStyles.inputContainer}>
            <TextInputComponent
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text)
                if (errors.email) setErrors({ ...errors, email: '' })
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              error={!!errors.email}
              errorMessage={errors.email}
              editable={!loading}
            />
          </View>

          <View style={dynamicStyles.inputContainer}>
            <TextInputComponent
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => {
                setPassword(text)
                if (errors.password) setErrors({ ...errors, password: '' })
              }}
              secureTextEntry
              error={!!errors.password}
              errorMessage={errors.password}
              editable={!loading}
            />
          </View>

          <TouchableOpacity 
            style={{ alignSelf: 'flex-end', marginBottom: theme.spacing.lg }}
            disabled={loading}
          >
            <Text
              style={{
                fontSize: theme.typography.size.sm,
                fontWeight: theme.typography.weight.semibold,
                color: theme.colors.primary,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              dynamicStyles.loginButton,
              loading && dynamicStyles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            <Text style={dynamicStyles.loginButtonText}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={dynamicStyles.footerSection}>
          <View style={dynamicStyles.footerTextContainer}>
            <Text style={dynamicStyles.footerText}>Don't have an account?</Text>
            <TouchableOpacity 
              onPress={() => navigation.replace('Register')}
              disabled={loading}
            >
              <Text style={dynamicStyles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen