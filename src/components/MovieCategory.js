import React, { useState } from 'react'
import { StyleSheet, Platform, ActivityIndicator, TouchableOpacity, Text, Image, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToFavourites } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';

const MovieCategory = ({ navigation }) => {
    const dispatch = useDispatch();

    // Fetching movies array from redux store
    const movies = useSelector(state => state.movies);
    const category1 = movies.filter((movie) => movie.classification == "7+");
    const category2 = movies.filter((movie) => movie.classification == "13+");
    const category3 = movies.filter((movie) => movie.classification == "18+");

    const HandleAddToFavourites = (item) => {
        dispatch(addToFavourites(item));
        Toast.show('Added to favourites');
    }

    // Movie card component
    const renderMovieCards = ({ item, index }) => (
        <TouchableOpacity style={[styles.touchable, {}]} activeOpacity={0.8} onPress={() => navigation.navigate("Details", { movie: item })}>
            <View style={{ ...styles.card, marginLeft: index == 0 ? 10 : 2 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: item.backdrop }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <View style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
                            <View>
                                <Text style={styles.movieName}>{item.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.imdb} >IMDb: {item.imdb_rating}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => HandleAddToFavourites(item)} style={{ display: 'flex', flex: 1, paddingTop: 4 }}>
                            <View >
                                <Icon name="heart-outline" color="red" size={26} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View>
            {
                movies.length == 0 ? (
                    <View style={styles.main}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                )
                    : (
                        <View>
                            {category3.length > 0 ? (
                                <View style={styles.containerMain}>
                                    <View style={styles.textContainerMain}>
                                        <Text style={styles.textMain}>Category 18+</Text>
                                    </View>

                                    <FlatList
                                        contentContainerStyle={{ marginTop: 0 }}
                                        data={category3}
                                        renderItem={renderMovieCards}
                                        keyExtractor={item => `${item.id}`}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />

                                </View>
                            ) : null}

                            {category2.length > 0 ? (
                                <View style={{ ...styles.containerMain, marginTop: 10 }}>
                                    <View style={styles.textContainerMain}>
                                        <Text style={styles.textMain}>Category 13+</Text>
                                    </View>

                                    <FlatList
                                        contentContainerStyle={{ marginTop: 0 }}
                                        data={category2}
                                        renderItem={renderMovieCards}
                                        keyExtractor={item => `${item.id}`}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />

                                </View>
                            ) : null}

                            {category1.length > 0 ? (
                                <View style={{ ...styles.containerMain, marginTop: 10 }}>
                                    <View style={styles.textContainerMain}>
                                        <Text style={styles.textMain}>Category 7+</Text>
                                    </View>

                                    <FlatList
                                        contentContainerStyle={{ marginTop: 0 }}
                                        data={category1}
                                        renderItem={renderMovieCards}
                                        keyExtractor={item => `${item.id}`}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />

                                </View>
                            ) : null}

                        </View>
                    )
            }
        </View>

    )
}

export default MovieCategory

const styles = StyleSheet.create({
    main: {
        flex: 1,
        display: 'flex',
        padding: 25,
        backgroundColor: '#013a63',
        justifyContent: "center",
        alignContent: 'center'
    },
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
    },
    textContainerMain: {
        margin: 5,
        marginBottom: 3,
        marginTop: 3,
        padding: 3,
        paddingLeft: 5,
    },
    textMain: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    imageContainer: {
        width: "100%",
        height: "80%",
        padding: 0,
        margin: 0,
    },
    textContainer: {
        width: "100%",
        height: "20%",
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movieName: {
        fontSize: 8.5,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 7,
        paddingTop: 5,
        paddingBottom: 1
    },
    imdb: {
        fontSize: 8,
        fontWeight: "bold",
        color: 'gold',
        paddingLeft: 7,
        paddingTop: 1,
        paddingBottom: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    card: {
        // for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4.65,
        shadowOpacity: 0.30,
        // for ios

        // for android
        elevation: 8,
        // for android

        borderRadius: 5,
        width: 150,
        height: 200,
        margin: 0,
        marginTop: 0,
        position: "relative",
        justifyContent: "flex-start",
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 0,
        paddingRight: 0,
        marginRight: 10,
        backgroundColor: "#fff",
        zIndex: 2,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    touchable: {
        width: 150,
        flexDirection: "row",
        overflow: 'hidden',
        borderRadius: 5
    },
})
