import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {homeCarouselItems} from '../../constants/MockData';
import {colors} from '../../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddCreditCard from "./AddCreditCard";
import {restService} from "../../service/restService";
import CreditCardItem from "../../components/CreditCardItem";

function Wallet() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItem] = useState(homeCarouselItems)
    const [myCreditCards, setMyCreditCards] = useState([])
    const navigation = useNavigation();


    useEffect(() => {
        return navigation.addListener('focus', () => {
            getMyCards();
        });
    }, [])

    const getMyCards = () => {
        restService.get("/creditCard/getMyCards")
            .then((response) => {
                if (response.success) {
                    setMyCreditCards(response.data)
                }
            })
    }

    function renderCarouselItem({item}) {
        return (
            <CreditCardItem creditCard={item}/>
        )
    }

    return (

        <View>
            <SurbiHeader isCartVisible={false} isNavigationVisible={true} title={'My Wallet'}/>
            {myCreditCards.length > 0 &&
            <View style={{marginTop: 20}}>
                <Carousel
                    loop={true}
                    autoplay={true}
                    layout={"default"}
                    data={myCreditCards}
                    sliderWidth={Dimensions.get("screen").width}
                    itemWidth={Dimensions.get("screen").width}
                    renderItem={renderCarouselItem}
                    onSnapToItem={index => setActiveIndex(index)}/>
                <Pagination
                    dotsLength={myCreditCards.length}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.paginationDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}/>
            </View>
            }
            <TouchableOpacity onPress={() => navigation.navigate('AddCreditCard')}
                              style={{alignItems: 'center', marginTop: 20}}>
                <View style={styles.button}>
                    <FontAwesome5 style={{marginRight: 17}}
                                  name={"plus-square"} size={23} color='white'/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: 'white'}}> ADD CARD</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        borderRadius: 5,
        alignItems: "center",
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 6,
        marginHorizontal: 2,
        backgroundColor: colors.getColor().colorPrimary
    },
    carouselImage: {
        height: 80,
        width: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button: {
        flexDirection: 'row',
        display: 'flex',
        padding: 10,
        backgroundColor: colors.getColor().colorPrimaryLight,
        borderRadius: 12,
        width: '50%',
        justifyContent: 'center'
    }
});

export default Wallet;