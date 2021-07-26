import React, { useState, useEffect } from 'react'
import { StyleSheet, Platform, TouchableOpacity, Text, Image, View, FlatList, ScrollView, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourites } from '../redux/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';

const moviesLiked = ({ navigation }) => {
    const dispatch = useDispatch();

    // Fetching favourites movies array from redux store
    const favourites = useSelector(state => state.favourites)
    const category1 = favourites.filter((movie) => movie.classification == "7+");
    const category2 = favourites.filter((movie) => movie.classification == "13+");
    const category3 = favourites.filter((movie) => movie.classification == "18+");

    const HandleRemoveFromFavourites = (item) => {
        dispatch(removeFromFavourites(item));
        Toast.show('Removed from favourites');
    }

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
                        <TouchableOpacity onPress={() => HandleRemoveFromFavourites(item)} style={{ display: 'flex', flex: 1, paddingTop: 4 }}>
                            <View >
                                <Icon name="close-circle" size={26} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.main}>
            <View>
                {category1.length == 0 && category2.length == 0 && category3.length == 0 ? (
                    <View style={{ flex: 1, display: 'flex', alignSelf: 'center' }}>
                        <Text style={{ color: "lightgray", fontSize: 20, padding: 20 }}>Nothing in favourites</Text>
                    </View>
                ) : (
                    <View style={{ paddingBottom: 25 }}>
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
                            <View style={styles.containerMain}>
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
                            <View style={styles.containerMain}>
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
        </ScrollView >
    )
}


export default moviesLiked;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#013a63',
        minWidth: "100%",
        minHeight: "100%",
        width: "100%",
        height: "100%"
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
        fontSize: 8,
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
