import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Easing } from 'react-native'

export default class InterpolateOpacity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            translation: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.translation, {
            toValue: 100,
            easing: Easing.bounce,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Animated.View style={{
                    backgroundColor: 'tomato', width: 100, height: 100,
                    transform: [{ translateX: this.state.translation },
                    { scaleX: this.state.translation.interpolate({ inputRange: [0, 100], outputRange: [0, 2] }) },
                    { scaleY: this.state.translation.interpolate({ inputRange: [0, 100], outputRange: [0, 2] }) }],
                    opacity: this.state.translation.interpolate({
                        inputRange: [0, 100],
                        outputRange: [0, 1]
                    })
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
