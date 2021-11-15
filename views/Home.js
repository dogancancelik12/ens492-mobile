import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import HomeProducts from "../components/HomeProducts";
import {COLORS} from "../constants/Colors";
import {restService} from '../service/restService';

function Home(props) {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItem] = useState([])
    const [scooters, setScooters] = useState([])
    const [bicycles, setBicycles] = useState([])
    const [camping, setCamping] = useState([])

    useEffect(() => {
        getPromotions();
    }, [])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getHomepageProducts();
        });
        return unsubscribe;
    }, [])

    const getPromotions = () => {
        restService.get('promotions/getAll')
            .then(response => {
                setCarouselItem(response.data)
            })
    }

    const getHomepageProducts = () => {
        restService.get('products/getTop3Products')
            .then(response => {
                setScooters(response.data.scootersList)
                setBicycles(response.data.bicyclesList)
                setCamping(response.data.campingList)
            })
    }

    function renderCarouselItem({item}) {
        return (
            <View style={styles.carouselItem}>
                <Image style={styles.carouselImage} source={{uri: item.imagePath}}/>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselDescription}>{item.text}</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <SurbiHeader title={"Home"}/>
            <Carousel
                loop={true}
                autoplay={true}
                layout={"default"}
                data={carouselItems}
                sliderWidth={Dimensions.get("screen").width}
                itemWidth={Dimensions.get("screen").width - 100}
                renderItem={renderCarouselItem}
                onSnapToItem={index => setActiveIndex(index)}/>
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.paginationDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}/>
            <HomeProducts products={scooters} title={"Scooters"}/>
            <HomeProducts products={bicycles} title={"Bicycles"}/>
            <View style={{marginBottom: 50}}>
                <HomeProducts products={camping} title={"Camping"}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 5,
        height: 200,
        marginTop: 20,
        alignItems: "center",
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 6,
        backgroundColor: COLORS.colorPrimary
    },
    carouselImage: {
        height: 140,
        width: "100%",
        resizeMode: "stretch",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    carouselTitle: {
        fontSize: 18,
        marginTop: 5,
        marginLeft: 15,
        alignSelf: "flex-start",
        color: COLORS.colorPrimary
    },
    carouselDescription: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 15,
        alignSelf: "flex-start"
    }
});

export default Home;