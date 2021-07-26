import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import MovieCategory from '../components/MovieCategory';
import { getMovies } from '../redux/actions';

const moviesHomePage = ({ navigation }) => {

    // Fetching movies array from the API
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <ScrollView style={{backgroundColor: '#013a63'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Trending Now</Text>
                </View>
                <MovieCategory navigation={navigation}/>
            </View>
        </ScrollView>
    )
}

export default moviesHomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 25,
        backgroundColor: '#013a63',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fcba03',
        margin: 8,
        padding: 2,
        borderRadius: 10,
        backgroundColor: '#fcba03'
    },
    headerText: {
        fontSize: 25,
        color: "#fff"
    }
})
