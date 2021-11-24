import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import {colors} from '../constants/Colors';

function FilterBottomSheet({onCloseAction, filteredValue}) {

    const refRBSheet = useRef();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Price', value: 'price'},
        {label: '100<', value: {type: 'price', value: 100}, parent: 'price'},
        {label: '300<', value: {type: 'price', value: 300}, parent: 'price'},
        {label: 'Rating', value: 'rating'},
        {label: '2+', value: {type: 'rating', value: 2}, parent: 'rating'},
        {label: '4+', value: {type: 'rating', value: 4}, parent: 'rating'}
    ]);

    useEffect(() => {
        refRBSheet.current.open()
    }, []);

    return (
        <RBSheet
            onClose={onCloseAction}
            closeOnDragDown={true}
            ref={refRBSheet}
            height={Dimensions.get("screen").height * 0.6}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center",

                }
            }}>
            <View style={styles.centeredView}>
                <DropDownPicker
                    onChangeValue={(val) => filteredValue(val)}
                    multiple={true}
                    placeholder={"Filter"}
                    dropDownContainerStyle={{width: "90%"}}
                    style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    closeAfterSelecting={true}
                    categorySelectable={false}
                    mode="BADGE"
                    badgeColors={colors.getColor().colorPrimaryLight}   //badgeDotColors={["red", "blue", "orange"]}  bu şekilde array yapıp
                    // farklı başlıklar farklı renklerde olabilir.
                    badgeDotColors='white'
                    badgeTextStyle={{
                        fontStyle: "italic",
                        fontWeight: '600'
                    }}
                    selectedItemContainerStyle={{
                        backgroundColor: colors.getColor().colorWhiteDark
                    }}
                    selectedItemLabelStyle={{
                        fontWeight: "bold"
                    }}
                />
            </View>
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 22
    },
    dropdown: {
        width: "90%",
    }
});

export default FilterBottomSheet;