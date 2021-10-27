import React, {useState} from 'react';
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import SurbiHeader from "../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {homeCarouselItems} from '../constants/MockData';
import {COLORS} from '../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddCreditCard from "./AddCreditCard";

function Wallet() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItem] = useState(homeCarouselItems)
    const navigation = useNavigation();



    function renderCarouselItem({item}) {
        return (
            <View style={styles.carouselItem}>
                <Image style={styles.carouselImage} source={{uri: item.image}}/>
            </View>
        )
    }

    return (

        <View>
            <SurbiHeader isCartVisible={false} isNavigationVisible={true} title={'My Wallet'}/>
            <Carousel
                loop={true}
                autoplay={true}
                layout={"default"}
                data={carouselItems}
                sliderWidth={Dimensions.get("screen").width}
                itemWidth={Dimensions.get("screen").width}
                renderItem={renderCarouselItem}
                onSnapToItem={index => setActiveIndex(index)}/>
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.paginationDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}/>

            <View style={{
                flexDirection: 'row',
                display: 'flex',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.colorPrimary
            }}>
                <FontAwesome5 style={{marginRight: 17}}
                              name={"credit-card"} size={40} color={COLORS.colorPrimary}/>
                <View>
                    <Text style={{fontSize: 16}}>Card 1</Text>
                    <Text style={{fontSize: 18}}>5168********89</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                display: 'flex',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.colorPrimary
            }}>
                <FontAwesome5 style={{marginRight: 17}}
                              name={"credit-card"} size={40} color={COLORS.colorPrimary}/>
                <View>
                    <Text style={{fontSize: 16}}>Card 2</Text>
                    <Text style={{fontSize: 18}}>5168********89</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                display: 'flex',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.colorPrimary
            }}>
                <FontAwesome5 style={{marginRight: 17}}
                              name={"credit-card"} size={40} color={COLORS.colorPrimary}/>
                <View>
                    <Text style={{fontSize: 16}}>Card 3</Text>
                    <Text style={{fontSize: 18}}>5168********89</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddCreditCard')} style={{alignItems: 'center', marginTop: '80%'}}>
                <View style={{
                    flexDirection: 'row',
                    display: 'flex',
                    padding: 10,
                    backgroundColor: '#657cb1',
                    borderRadius: 50,
                    width: '50%',
                    justifyContent: 'center'

                }}>
                    <FontAwesome5 style={{marginRight: 17}}
                                  name={"plus-square"} size={30} color='white'/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: 'white'}}> Add Card</Text>
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
        backgroundColor: COLORS.colorPrimary
    },
    carouselImage: {
        height: 80,
        width: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
});

export default Wallet;