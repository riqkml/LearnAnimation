import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, TouchableOpacity, Easing } from 'react-native'

export default class RandomBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: new Animated.ValueXY(0, 0)
        }
    }

    _handleRandom = () => {
        Animated.parallel([
            Animated.timing(this.state.position.x, {
                toValue: Math.floor(Math.random() * 201) - 100,
                speed: 1,
                easing: Easing.in,
                useNativeDriver: true
            }),
            Animated.spring(this.state.position.y, {
                toValue: Math.floor(Math.random() * 201) - 100,
                speed: 1,
                useNativeDriver: true
            })
        ]).start()
    }


    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Animated.View style={{ backgroundColor: 'red', width: 100, height: 100, transform: [{ translateX: this.state.position.x }, { translateY: this.state.position.y }] }} >
                    <TouchableOpacity onPress={() => this._handleRandom()} style={{ width: 100, height: 100 }} />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
