import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SurbiHeader from "../../components/SurbiHeader";
import {colors} from "../../constants/Colors";
import ProductsGridView from "../../components/ProductsGridView";
import RenderSearchBar from "../../components/SearchBar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FilterBottomSheet from "../../components/FilterBottomSheet";
import {restService} from '../../service/restService';

function Products() {

    const [isFilterBottomSheetVisible, setIsFilterBottomSheetVisible] = useState(false)
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState('');
    const [scooters, setScooters] = useState([]);
    const [bicycles, setBicycles] = useState([]);
    const [camping, setCamping] = useState([]);
    const [sortByPriceValue, setSortByPriceValue] = useState(0);
    const [sortByRatingValue, setSortByRatingValue] = useState(0);
    const [routes] = React.useState([
        {key: 'scooters', title: 'Scooters'},
        {key: 'bicycles', title: 'Bicycles'},
        {key: 'camping', title: 'Camping'},
    ]);

    useEffect(() => {
        let filteredScooters = [];
        let filteredBicycles = [];
        let filteredCamping = [];
        let boolScooter = false;
        let boolBicycle = false;
        let boolCamping = false;
        for (let productScooter of scooters) {
            for (let i = 0; i < value.length; i++) {
                boolScooter = productScooter.name.toLowerCase().indexOf(value[i].toLowerCase()) !== -1;
            }
            if (boolScooter) {
                filteredScooters.push(productScooter)
            }
        }
        for (let productBicycle of bicycles) {
            for (let i = 0; i < value.length; i++) {
                boolBicycle = productBicycle.name.toLowerCase().indexOf(value[i].toLowerCase()) !== -1;
            }
            if (boolBicycle) {
                filteredBicycles.push(productBicycle)
            }
        }
        for (let productCamping of camping) {
            for (let i = 0; i < value.length; i++) {
                boolCamping = productCamping.name.toLowerCase().indexOf(value[i].toLowerCase()) !== -1;
            }
            if (boolCamping) {
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
    }, [])

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

    const sortByPrice = () => {
        setSortByRatingValue(0)
        if (sortByPriceValue === 0) {
            setSortByPriceValue(1)
            let sortedScooters = scooters.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            let sortedBicycles = bicycles.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            let sortedCamping = camping.sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            setScooters(sortedScooters)
            setBicycles(sortedBicycles)
            setCamping(sortedCamping)
        } else if (sortByPriceValue === 1) {
            setSortByPriceValue(-1)
            let sortedScooters = scooters.sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            let sortedBicycles = bicycles.sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            let sortedCamping = camping.sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            setScooters(sortedScooters)
            setBicycles(sortedBicycles)
            setCamping(sortedCamping)
        } else if (sortByPriceValue === -1) {
            setSortByPriceValue(0)
            getHomepageProducts()
        }
    }

    const sortByRating = () => {
        setSortByPriceValue(0)
        if (sortByRatingValue === 0) {
            setSortByRatingValue(1)
            let sortedScooters = scooters.sort((a, b) => {
                return a.rating > b.rating ? 1 : -1
            })
            let sortedBicycles = bicycles.sort((a, b) => {
                return a.rating > b.rating ? 1 : -1
            })
            let sortedCamping = camping.sort((a, b) => {
                return a.rating > b.rating ? 1 : -1
            })
            setScooters(sortedScooters)
            setBicycles(sortedBicycles)
            setCamping(sortedCamping)
        } else if (sortByRatingValue === 1) {
            setSortByRatingValue(-1)
            let sortedScooters = scooters.sort((a, b) => {
                return a.rating > b.rating ? -1 : 1
            })
            let sortedBicycles = bicycles.sort((a, b) => {
                return a.rating > b.rating ? -1 : 1
            })
            let sortedCamping = camping.sort((a, b) => {
                return a.rating > b.rating ? -1 : 1
            })
            setScooters(sortedScooters)
            setBicycles(sortedBicycles)
            setCamping(sortedCamping)
        } else if (sortByRatingValue === -1) {
            setSortByRatingValue(0)
            getHomepageProducts()
        }
    }


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
            <View style={styles.filter_search}>
                <TouchableOpacity style={styles.filterButton} onPress={() => setIsFilterBottomSheetVisible(true)}>
                    <FontAwesome5 name={"filter"} size={22} color={colors.getColor().colorPrimaryLight}/>
                </TouchableOpacity>
                <RenderSearchBar searchedText={(text) => setValue(text)}/>
            </View>
            <TabBar
                {...props}
                activeColor={colors.getColor().colorSecondary}
                inactiveColor={colors.getColor().colorPrimary}
                style={styles.tabBar}
                indicatorStyle={styles.indicator}
                labelStyle={{fontSize: 12, fontWeight: "500"}}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.sortingButton} onPress={() => sortByPrice()}>
                    <Text>Price</Text>
                    <FontAwesome5 style={{marginLeft: 5}}
                                  name={sortByPriceValue === 0 ? 'arrow-right' : sortByPriceValue === 1 ? 'arrow-up' : 'arrow-down'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortByRating()} style={styles.sortingButton}>
                    <Text>Rating</Text>
                    <FontAwesome5 style={{marginLeft: 5}}
                                  name={sortByRatingValue === 0 ? 'arrow-right' : sortByRatingValue === 1 ? 'arrow-up' : 'arrow-down'}/>
                </TouchableOpacity>
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
        backgroundColor: colors.getColor().colorWhiteDark,
        width: "80%",
        height: 45,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5
    },
    indicator: {
        backgroundColor: colors.getColor().colorWhiteDark,
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
        backgroundColor: colors.getColor().colorWhiteDark,
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    sortingButton: {
        marginLeft: 12,
        marginTop: 10,
        backgroundColor: colors.getColor().colorSecondary,
        width: 70,
        alignItems: 'center',
        borderRadius: 10,
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default Products;
