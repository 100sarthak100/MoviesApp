import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Image, Platform, View, SafeAreaView, ScrollView } from 'react-native'

const movieDetails = ({ route, navigation }) => {

    const [selectedMovie, setSelectedMovie] = useState({});

    // Getting movie item from the navigation route
    useEffect(() => {
        const { movie } = route.params;
        setSelectedMovie(movie);
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <ScrollView style={{ backgroundColor: "#013a63" }}>
                {
                    selectedMovie ? (
                        <View style={styles.container}>

                            <View style={styles.card}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={{ uri: selectedMovie.backdrop }}
                                        style={styles.image}
                                    />
                                </View>
                            </View>

                            <View style={{ ...styles.detailsCard, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.imdb}>
                                    <Text style={styles.imdbText}>IMDb: {selectedMovie.imdb_rating}</Text>
                                </View>
                                <View style={styles.length}>
                                    <Text style={styles.lengthText}>Length: {selectedMovie.length}</Text>
                                </View>
                            </View>
                            {selectedMovie.genres !== undefined ? (
                                <View style={{ ...styles.detailsCard, flexDirection: 'row', backgroundColor: "#013a63" }}>
                                    {
                                        // console.log("a", selectedMovie.genres[0])
                                        selectedMovie.genres.map((genre, index) => (
                                            <View key={index} style={styles.genre}>
                                                <Text style={styles.genreText}>{genre}</Text>
                                            </View>
                                        ))
                                    }
                                </View>
                            ) : null}


                            <View style={styles.detailsCard}>
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>{selectedMovie.title}</Text>
                                </View>
                                <View style={styles.overview}>
                                    <Text style={styles.overviewHeaderText}>Overview</Text>
                                    <Text style={styles.overviewText}>{selectedMovie.overview}</Text>
                                </View>
                            </View>

                            <View style={{ ...styles.detailsCard, flex: 1, flexDirection: 'row' }}>
                                <View style={styles.castHeader}>
                                    <Text style={styles.castHeaderText}>Director: {selectedMovie.director}</Text>
                                </View>
                            </View>

                            {selectedMovie.cast !== undefined ? (
                                <View style={{ ...styles.detailsCard, flex: 1, flexDirection: 'column' }}>
                                    <View style={styles.castHeader}>
                                        <Text style={styles.castHeaderText}>Cast</Text>
                                    </View>
                                    <View style={{ paddingLeft: 5, paddingBottom: 5, flexDirection: 'row' }}>
                                        {
                                            selectedMovie.cast.map((c, index) => (
                                                <View key={index} style={styles.cast}>
                                                    <Text style={styles.castText}>{c} {selectedMovie.cast.length === index + 1 ? '' : ' , '}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            ) : null}

                        </View>
                    ) : <Text>Loading...</Text>
                }

            </ScrollView>

        </SafeAreaView >
    )
}

export default movieDetails

const styles = StyleSheet.create({
    castHeader: {
        flex: 1,
        padding: 1,
    },
    castHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    genre: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        margin: 5,
        // paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'gold'
    },
    genreText: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold'
    },
    imdb: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 2,
        paddingLeft: 10
    },
    imdbText: {
        color: '#013a63',
        fontSize: 15
    },
    length: {
        padding: 2,
        paddingRight: 10
    },
    lengthText: {
        color: 'black',
        fontSize: 15
    },
    container: {
        flex: 1,
        flexDirection: "column",
        paddingBottom: 25
    },
    card: {
        width: "98%",
        height: 200,
        position: "relative",
        justifyContent: "flex-start",
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 0,
        // paddingRight: 5,
        marginRight: 2,
        marginLeft: 4,
        marginTop: 5,
        backgroundColor: "#fff",
        borderRadius: 5,
        zIndex: 2,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    detailsCard: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    imageContainer: {
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
    },
    header: {
        flex: 1,
        padding: 2
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 8
    },
    overview: {
        flex: 1,
        padding: 3
    },
    overviewHeaderText: {
        fontSize: 21,
        fontWeight: 'bold',
        paddingLeft: 7
    },
    overviewText: {
        fontSize: 18,
        paddingLeft: 7,
    }
})
