import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, TouchableOpacity } from 'react-native'

export default class FadeEffect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fade: new Animated.Value(1),
            currentValue: 0
        }
    }

    _fade = (value) => {
        Animated.timing(this.state.fade, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: "center" }}>
                <Animated.View style={{ backgroundColor: 'red', width: 100, height: 100, opacity: this.state.fade }}>
                    <TouchableOpacity onPress={() => this._fade(!this.state.value)} style={{ backgroundColor: "red", width: 100, height: 100, }} />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
