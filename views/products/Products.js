import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SurbiHeader from "../../components/SurbiHeader";
import {COLORS} from "../../constants/Colors";
import ProductsGridView from "../../components/ProductsGridView";
import RenderSearchBar from "../../components/SearchBar";
import {productsBicycles, productsCamping, productsScooters} from "../../constants/MockData";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FilterBottomSheet from "../../components/FilterBottomSheet";
import {restService} from '../../service/restService';
import {get} from 'react-native-web/dist/vendor/react-native/TurboModule/TurboModuleRegistry';

function Products() {

    const [isFilterBottomSheetVisible, setIsFilterBottomSheetVisible] = useState(false)
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState('');
    const [scooters, setScooters] = useState([]);
    const [bicycles, setBicycles] = useState([]);
    const [camping, setCamping] = useState([]);
    const [routes] = React.useState([
        {key: 'scooters', title: 'Scooters'},
        {key: 'bicycles', title: 'Bicycles'},
        {key: 'camping', title: 'Camping'},
    ]);

    useEffect(() => {
        let filteredScooters = [];
        let filteredBicycles = [];
        let filteredCamping = [];
        for (let productScooter of scooters) {
            if (productScooter.name.indexOf(value) !== -1) {
                filteredScooters.push(productScooter)
            }
        }
        for (let productBicycle of bicycles) {
            if (productBicycle.name.indexOf(value) !== -1) {
                filteredBicycles.push(productBicycle)
            }
        }
        for (let productCamping of camping) {
            if (productCamping.name.indexOf(value) !== -1) {
                filteredCamping.push(productCamping)
            }
        }
        if (value.length < 1) {
            getHomepageProducts()
        } else {
            setScooters(filteredScooters);
            setBicycles(filteredBicycles);
            setCamping(filteredCamping);
        }
    }, [value])

    useEffect(() => {
        getHomepageProducts()
    }, [index])

    const getHomepageProducts = () => {
        restService.get('products/getAll')
            .then(response => {
                setScooters(response.data.scootersList)
                setBicycles(response.data.bicyclesList)
                setCamping(response.data.campingList)
            })
    }

    const filterFunction = (val) => {
        let filteredScooters = []
        let filteredBicycles = []
        let filteredCamping = []

        if (val && val.length > 0 && val[0].type === 'price') {
            filteredScooters = scooters.filter(scooter => {
                return scooter.price > val[0].value
            })
            filteredBicycles = bicycles.filter(bicycle => {
                return bicycle.price > val[0].value
            })
            filteredCamping = camping.filter(camping => {
                return camping.price > val[0].value
            })
            setScooters(filteredScooters)
            setBicycles(filteredBicycles)
            setCamping(filteredCamping)
        } else if (val && val.length > 0 && val[0].type === 'rating') {
            filteredScooters = scooters.filter(scooter => {
                return scooter.rating > val[0].value
            })
            filteredBicycles = bicycles.filter(bicycle => {
                return bicycle.rating > val[0].value
            })
            filteredCamping = camping.filter(camping => {
                return camping.rating > val[0].value
            })
            setScooters(filteredScooters)
            setBicycles(filteredBicycles)
            setCamping(filteredCamping)
        } else {
            getHomepageProducts()
        }
    };


    const RenderScooters = () => (
        <ProductsGridView products={scooters}/>
    );

    const RenderBicycles = () => (
        <ProductsGridView products={bicycles}/>
    );

    const RenderCamping = () => (
        <ProductsGridView products={camping}/>
    );

    const renderScene = SceneMap({
        scooters: RenderScooters,
        bicycles: RenderBicycles,
        camping: RenderCamping,
    });

    const renderTabBar = props => (
        <>
            <TabBar
                {...props}
                activeColor={COLORS.colorSecondary}
                inactiveColor={COLORS.colorPrimary}
                style={styles.tabBar}
                indicatorStyle={styles.indicator}
                labelStyle={{fontSize: 12, fontWeight: "500"}}
            />
            <View style={styles.filter_search}>
                <TouchableOpacity style={styles.filterButton} onPress={() => setIsFilterBottomSheetVisible(true)}>
                    <FontAwesome5 name={"filter"} size={22} color={COLORS.colorPrimaryLight}/>
                </TouchableOpacity>
                <RenderSearchBar searchedText={(text) => setValue(text)}/>
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
            <FilterBottomSheet filteredValue={(val) => filterFunction(val)}
                               onCloseAction={() => setIsFilterBottomSheetVisible(false)}/>
            }
        </>

    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.colorWhiteDark,
        width: "80%",
        height: 45,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5
    },
    indicator: {
        backgroundColor: COLORS.colorWhiteDark,
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
        backgroundColor: COLORS.colorWhiteDark,
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Products;
