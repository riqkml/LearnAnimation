import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LoadingBubble from './LoadingBubble'
import RandomBox from './RandomBox'
import StaggerBox from './StaggerBox'

export default class App extends Component {
  render() {
    return <StaggerBox />
  }
}

const styles = StyleSheet.create({})
