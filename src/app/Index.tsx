import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WithoutState from '../components/1.BasicCounter/WithoutState'
import WithState from '../components/1.BasicCounter/WithState/WithState'
import UpdateArray from '../components/2.UpdatingArrays/UpdateArray'

const Index = () => {
    return (
        <View>

            {/* <WithoutState /> */}
            {/* <WithState/> */}

            <UpdateArray />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})