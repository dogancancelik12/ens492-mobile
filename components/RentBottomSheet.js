import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import DatePicker from 'react-native-neat-date-picker'
import {useNavigation} from "@react-navigation/native";
import moment from "moment";
import localization from 'moment/locale/tr'

function RentBottomSheet({onCloseAction}) {

    const navigation = useNavigation();
    const refRBSheet = useRef();
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(() => {
        refRBSheet.current.open()
    }, []);

    function confirmSelectedDate(start, end) {
        setStartDate(start.getTime())
        setEndDate(end.getTime())
        setIsDatePickerVisible(false)
    }

    function handleConfirmRent() {
        if (startDate === null) {
            Alert.alert("Please select date")
        } else {
            navigation.navigate('Cart')
            onCloseAction()
        }
    }

    return (
        <RBSheet
            onClose={onCloseAction}
            ref={refRBSheet}
            height={Dimensions.get("screen").height * 0.4}
            closeOnDragDown={true}
        >
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{padding: 10, marginTop: 15, fontSize: 16}}>Selected date range:</Text>
                {startDate === null &&
                <TouchableOpacity style={styles.button}
                                  onPress={() => setIsDatePickerVisible(true)}>
                    <Text>Select Date</Text>
                </TouchableOpacity>
                }
                {startDate !== null &&
                <Text onPress={() => setIsDatePickerVisible(true)}
                      style={{padding: 10, marginTop: 15, color: "blue", fontSize: 18}}>
                    {moment(startDate).locale("tr", localization).format('l')} - {moment(endDate).locale("tr", localization).format('l')}
                </Text>
                }
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{padding: 10, marginTop: 5, fontSize: 16}}>Cost per day: 15$/day</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{padding: 10, marginTop: 5, fontSize: 16}}>Total Cost: 60$/day</Text>
            </View>
            <TouchableOpacity onPress={() => handleConfirmRent()}
                              style={[styles.button, {marginTop: 40}]}>
                <Text>
                    CONFIRM RENT
                </Text>
            </TouchableOpacity>
            <DatePicker
                isVisible={isDatePickerVisible}
                mode={'range'}
                onCancel={() => setIsDatePickerVisible(false)}
                onConfirm={(start, end) => confirmSelectedDate(start, end)}
            />
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#657cb1',
        padding: 10,
        borderRadius: 10,
        width: "50%",
        alignSelf: "center",
        marginTop: 15
    },
});

export default RentBottomSheet;