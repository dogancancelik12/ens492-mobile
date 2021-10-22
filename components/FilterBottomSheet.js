import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import RBSheet from "react-native-raw-bottom-sheet";

function FilterBottomSheet({onCloseAction}) {

    const refRBSheet = useRef();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: '<100', value: 'battery'},
        {label: '<200', value: 'distance'}
    ]);

    useEffect(() => {
        refRBSheet.current.open()
    }, []);

    return (
        <RBSheet
            onClose={onCloseAction}
            closeOnDragDown={true}
            ref={refRBSheet}
            height={Dimensions.get("screen").height * 0.7}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}>
            <View style={styles.centeredView}>
                <DropDownPicker
                    multiple={true}
                    placeholder={"Price"}
                    dropDownContainerStyle={{width: "90%"}}
                    style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
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