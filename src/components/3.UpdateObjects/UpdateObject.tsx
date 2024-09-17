import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {


    const [movie, setMovie] = useState({
        title: "Good Day",
        rating: 8

    })

    const handleClick = () => setMovie({ ...movie, rating: 2 })

    return (
        <View>
            <Text>Movie Title : {movie.title} Rating :  {movie.rating} </Text>

            <Button onPress={handleClick} title='Change Movie' />
        </View>
    )
}

export default UpdateObject

const styles = StyleSheet.create({})