import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {homeCarouselItems} from "../constants/MockData";
import HomeProducts from "../components/HomeProducts";
import {COLORS} from "../constants/Colors";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {restService} from '../service/restService';

function Home() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItem] = useState(homeCarouselItems)

    useEffect(() => {
        getPromotions();
    }, [])

    const getPromotions = () => {
        restService.get('promotions/getAll')
            .then(response=>{
                //console.log('DATA',response)
            })
    }

    function renderCarouselItem({item}) {
        return (
            <View style={styles.carouselItem}>
                <Image style={styles.carouselImage} source={{uri: item.image}}/>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselDescription}>{item.text}</Text>
            </View>
        )
    }

    return (
        <View>
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
            <HomeProducts title={"Scooters"}/>
            <HomeProducts title={"Bicycles"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 5,
        height: 200,
        marginTop: 30,
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