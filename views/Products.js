import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SurbiHeader from "../components/SurbiHeader";
import {COLORS} from "../constants/Colors";
import ProductsGridView from "../components/ProductsGridView";
import RenderSearchBar from "../components/SearchBar";
import {productsBicycles, productsCamping, productsScooters} from "../constants/MockData";

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
            />
            <RenderSearchBar/>
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
        backgroundColor: "black",
        width: 50,
        height: 2,
        borderRadius: 10,
        alignSelf: "center",
        marginLeft: 25
    }
});

export default Products;
