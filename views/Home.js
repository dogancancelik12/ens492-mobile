import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../components/SurbiHeader";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import HomeProducts from "../components/HomeProducts";
import {colors} from "../constants/Colors";
import {restService} from '../service/restService';
import SurbiPopUp from '../components/SurbiPopUp';
import {useNavigation} from '@react-navigation/native';

function Home(props) {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItem] = useState([])
    const [scooters, setScooters] = useState([])
    const [bicycles, setBicycles] = useState([])
    const [camping, setCamping] = useState([])
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [promotion, setPromotion] = useState({})
    const [mostUsedProducts, setMostUsedProducts] = useState(null)

    const navigation = useNavigation();

    useEffect(() => {
        getPromotions();
    }, [])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getHomepageProducts();
            getPromotions();
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
                let used = []
                used.push(response.data.scootersList[0])
                used.push(response.data.bicyclesList[0])
                used.push(response.data.campingList[0])
                setMostUsedProducts(used)
            })
    }

    function renderCarouselItem({item}) {
        return (
            <TouchableOpacity onPress={() => {
                setPromotion(item)
                setIsPopUpVisible(true)
            }} style={styles.carouselItem}>
                <Image style={styles.carouselImage} source={{uri: item.imagePath}}/>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselDescription}>{item.text}</Text>
            </TouchableOpacity>
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
            <HomeProducts products={scooters} title={"Top Rated Scooters"}/>
            <HomeProducts products={bicycles} title={"Top Rated Bicycles"}/>
            <View style={{marginBottom: 50}}>
                <HomeProducts products={camping} title={"Top Rated Camping"}/>
            </View>

            <View style={{marginBottom: 50}}>
                <HomeProducts products={mostUsedProducts} title={"Most Used Products"}/>
            </View>

            {isPopUpVisible &&
            <View>
                <SurbiPopUp negativeButtonAction={() => setIsPopUpVisible(false)}
                            positiveButtonAction={() => {
                                setIsPopUpVisible(false);
                                navigation.navigate("Cart");
                            }}
                            title={promotion.detail}
                            positiveButtonText={"Try It Now"}
                            negativeButtonText={"Next Time :("}/>
            </View>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        backgroundColor: colors.getColor().colorWhiteDark,
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
        backgroundColor: colors.getColor().colorPrimary
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
        color: colors.getColor().colorPrimary
    },
    carouselDescription: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 15,
        alignSelf: "flex-start"
    }
});

export default Home;