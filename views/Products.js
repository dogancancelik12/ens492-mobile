import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SurbiHeader from "../components/SurbiHeader";
import {COLORS} from "../constants/Colors";
import ProductsGridView from "../components/ProductsGridView";
import RenderSearchBar from "../components/SearchBar";
import {productsBicycles, productsCamping, productsScooters} from "../constants/MockData";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FilterBottomSheet from "../components/FilterBottomSheet";

const RenderScooters = () => (
    <ProductsGridView products={productsScooters}/>
);

const RenderBicycles = () => (
    <ProductsGridView products={productsBicycles}/>
);

const RenderCamping = () => (
    <ProductsGridView products={productsCamping}/>
);

const renderScene = SceneMap({
    scooters: RenderScooters,
    bicycles: RenderBicycles,
    camping: RenderCamping,
});

function Products() {

    const [isFilterBottomSheetVisible, setIsFilterBottomSheetVisible] = useState(false)
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'scooters', title: 'Scooters'},
        {key: 'bicycles', title: 'Bicycles'},
        {key: 'camping', title: 'Camping'},
    ]);

    const renderTabBar = props => (
        <>
            <TabBar
                {...props}
                activeColor={"black"}
                inactiveColor={COLORS.colorPrimary}
                style={styles.tabBar}
                indicatorStyle={styles.indicator}
                labelStyle={{fontSize: 12, fontWeight: "500"}}
            />
            <View style={styles.filter_search}>
                <TouchableOpacity style={styles.filterButton} onPress={() => setIsFilterBottomSheetVisible(true)}>
                    <FontAwesome5 name={"filter"} size={22}/>
                </TouchableOpacity>
                <RenderSearchBar/>
            </View>
        </>
    );

    return (
        <>
            <SurbiHeader title={"Products"}/>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={Dimensions.get('window').width}
            />
            {isFilterBottomSheetVisible &&
            <FilterBottomSheet onCloseAction={() => setIsFilterBottomSheetVisible(false)}/>
            }
        </>

    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        width: "80%",
        height: 45,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5
    },
    indicator: {
        backgroundColor: "white",
        width: 55,
        height: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginLeft: 25
    },
    filter_search: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    filterButton: {
        marginTop: 10,
        backgroundColor: "#e7e7ea",
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Products;
