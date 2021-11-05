import React from 'react';
import {Image, StyleSheet, Text, FlatList, View, ScrollView} from 'react-native';
import SurbiHeader from "../../components/SurbiHeader";
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../../constants/Colors";
import {AirbnbRating} from "react-native-ratings";


function OrderDetail(){
    const navigation = useNavigation();

    return(
        <View style={{alignItems: "center", height: "100%", width: "100%"}}>
            <SurbiHeader
                title={"Order Detail"}
                isNavigationVisible={true}/>


            <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Delivery Address</Text>
                    <Text style={styles.description}>Tolga Ev</Text>
                    <Text style={styles.description}>İstinye Mah. Sarıyer</Text>
                </View>
        </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Order Detail</Text>
                    <Text style={styles.description}>Delivery Time: 24 May 2021</Text>
                    <Text style={styles.description}>Delivery Detail: 3 Delivery, 3 Products</Text>
                    <Text style={styles.description}>Total Price: 325$</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.title}>Orders</Text>
                <View style={styles.orderContainer}>
                <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                <View>
                    <Text style={styles.productTitle}>Scooter 1</Text>
                    <AirbnbRating starContainerStyle={styles.description}
                                  isDisabled={true}
                                  showRating={false}
                                  count={5}
                                  defaultRating={3}
                                  size={20}/>
                    <Text style={styles.description}>Status: Delivered</Text>
                    <Text style={styles.description}>Count :1</Text>
                    <Text style={styles.description}>Price: 100$</Text>
                </View>
            </View>

                <View style={styles.orderContainer}>
                    <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                    <View>
                        <Text style={styles.productTitle}>Scooter 2</Text>
                        <AirbnbRating starContainerStyle={styles.description}
                                      isDisabled={true}
                                      showRating={false}
                                      count={5}
                                      defaultRating={3}
                                      size={20}/>
                        <Text style={styles.description}>Status: Delivered</Text>
                        <Text style={styles.description}>Count :2</Text>
                        <Text style={styles.description}>Total Price: 200$</Text>
                    </View>
                </View>

                <View style={styles.orderContainer}>
                    <Image style={styles.image} source={{uri: "https://picsum.photos/200/300"}}/>
                    <View>
                        <Text style={styles.productTitle}>Bicycle 3</Text>
                        <Text style={styles.description}>Status: Delivered</Text>
                        <Text style={styles.description}>Count :1</Text>
                        <Text style={styles.description}>Total Price: 125$</Text>
                    </View>
                </View>

            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        padding: 20,
        color: "white",
        fontSize: 17,
        alignSelf: "flex-start"
    },
    image: {
        height: 130,
        width: 130,
        resizeMode: "cover",
        borderRadius:10,
        marginLeft:10,
    },
    scrollView: {
        height: "3%",
        width: "95%",
    },
    title: {
        marginLeft: 10,
        marginBottom:3,
        fontSize: 18,
        color: COLORS.colorPrimaryDark,
        fontWeight: "700",
        marginTop:14,
    },
    productTitle: {
        marginLeft: 10,
        marginBottom:3,
        fontSize: 18,
        color: COLORS.colorPrimaryDark,
        fontWeight: "700",
    },
    description: {
        marginLeft: 10,
        marginTop:5,
        fontSize: 15,
        color: COLORS.colorPrimaryLight,
        fontWeight: "700",
    },
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        marginTop:10,
        height: "25%",
        width: "100%",
    },
    orderContainer: {
        flexDirection: "row",
        alignContent:"center",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        marginTop:10,
        height: "30%",
        width: "100%",
        borderBottomWidth:1,
        borderBottomColor:COLORS.colorPrimaryDark,
    },
    subContainer: {
        flexDirection: "column",
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 10,
        marginTop:10,
        height: "80%",
        width: "100%",
    }
});

export default OrderDetail;