import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OneComponent from './OneComponent'
import TwoComponent from './TwoComponent'

const SharingState = () => {


    const [count, setCount] = useState(0)

    return (
        <View>
            <Text>Sharing State Hanling</Text>

            <OneComponent count={count} onClickHandler={() => setCount(count + 1)} />
            <TwoComponent count={count} onClickHandler={() => setCount(count - 1)} />
        </View>
    )
}

export default SharingState

const styles = StyleSheet.create({})