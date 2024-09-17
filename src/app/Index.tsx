import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WithoutState from '../components/1.BasicCounter/WithoutState'
import WithState from '../components/1.BasicCounter/WithState/WithState'
import UpdateArray from '../components/2.UpdatingArrays/UpdateArray'
import UpdateObject from '../components/3.UpdateObjects/UpdateObject'
import SharingState from '../components/4.SharingState/SharingState'

const Index = () => {
    return (
        <View>

            {/* <WithoutState /> */}
            {/* <WithState/> */}

            {/* <UpdateArray /> */}

            {/* <UpdateObject /> */}
            <SharingState />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})