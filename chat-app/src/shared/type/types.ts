import { TextInput, ViewStyle } from "react-native";

export type InputProps = {
    icon: React.ReactNode
    containerStyle: ViewStyle,
    inputStyle: TextInput,
    inputRef: React.RefObject<TextInput>
}

export type RootStackParamList = {
    Auth: undefined,
    Main: undefined,
}

export type AuthStackParamList = {
    Login: undefined,
    Register: undefined,
}

export type MainStackParamList = {
    Tabs: undefined,
    chatRoom: {
        conversationId: string,
        participantName: string
        participantAvatar: string
    }
}

export type TabParamList = {
    ChatsTab: undefined,
    CallsTab: undefined,
    ProfileTab: undefined
}

