import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'

export default class StaggerBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fade1: new Animated.Value(0),
            fade2: new Animated.Value(0),
            fade3: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.stagger(700, [
            Animated.timing(this.state.fade1, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(this.state.fade2, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(this.state.fade3, {
                toValue: 1,
                useNativeDriver: true
            })
        ]).start()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: "center" }}>
                <Animated.View style={{ backgroundColor: 'red', width: 100, height: 100, opacity: this.state.fade1 }} />
                <Animated.View style={{ backgroundColor: 'red', width: 100, height: 100, opacity: this.state.fade2 }} />
                <Animated.View style={{ backgroundColor: 'red', width: 100, height: 100, opacity: this.state.fade3 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
