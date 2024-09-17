import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {

    const [count, setCount] = useState(0)

    console.log(count);

    return (
        <View>
            <Text>Count : {count}</Text>
            <Button onPress={() => setCount(count + 1)} title='Increament' />
            <Button onPress={() => setCount(count - 1)} title='Decreament' />
        </View>
    )
}

export default WithState

const styles = StyleSheet.create({})