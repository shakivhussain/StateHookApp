import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


const UpdateArray = () => {

    const [place, setPlace] = useState(['Delhi', 'Mumbai', 'Gurgaon'])
    const addOnePlace = () => setPlace([...place, 'new place'])
    const removeOnePlace = () => setPlace(place.filter(p => p != 'Mumbai'))

    const updatePlace = () => setPlace(place.map(p => (p === "Gurgaon" ? "New Gurgao" : p)))

    return (
        <View>
            <Text>Update Array {place}</Text>

            <FlatList
                data={place}
                keyExtractor={place => place}
                renderItem={({ item }) => <Text>My Place {item}</Text>}
            />


            <Button title='Add Place' onPress={(addOnePlace)} />
            <Button title='Remove Place' onPress={(removeOnePlace)} />
            <Button title='Update Place' onPress={(updatePlace)} />

        </View>

    )
}

export default UpdateArray

const styles = StyleSheet.create({})