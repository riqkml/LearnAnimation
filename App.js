import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Easing } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0),
      animation2: new Animated.Value(0),
      animation3: new Animated.Value(0),
      animation4: new Animated.Value(0),
      animations: new Animated.Value(0),
      animations2: new Animated.Value(0),
      animations3: new Animated.Value(0),
      animations4: new Animated.Value(0)
    }
  }


  componentDidMount() {
    this._handleAnimation()
  }
  _parallel = (state1, value, delay) => {
    Animated.timing(state1, {
      toValue: -1 * value,
      duration: 700,
      delay: delay,
      useNativeDriver: true
    }).start(() => Animated.timing(state1, {
      toValue: value,
      duration: 700,
      useNativeDriver: true
    }).start(() => this._parallel(state1, value)))
  }
  _handleAnimation = () => {
    Animated.parallel([
      this._parallel(this.state.animations, 40, 100),
      this._parallel(this.state.animations2, 40, 300),
      this._parallel(this.state.animations3, 40, 500),
      this._parallel(this.state.animations4, 40, 700)

    ]).start()
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Animated.View style={{ width: 20, height: 20, backgroundColor: 'red', borderRadius: 50, marginRight: 10, transform: [{ translateY: this.state.animations }] }} />
          <Animated.View style={{ width: 20, height: 20, backgroundColor: 'orange', borderRadius: 50, marginRight: 5, transform: [{ translateY: this.state.animations2 }] }} />
          <Animated.View style={{ width: 20, height: 20, backgroundColor: 'green', borderRadius: 50, marginRight: 5, transform: [{ translateY: this.state.animations3 }] }} />
          <Animated.View style={{ width: 20, height: 20, backgroundColor: 'blue', borderRadius: 50, marginRight: 5, transform: [{ translateY: this.state.animations4 }] }} />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
