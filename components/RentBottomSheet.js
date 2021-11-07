import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import DatePicker from 'react-native-neat-date-picker'
import {useNavigation} from "@react-navigation/native";
import moment from "moment";
import localization from 'moment/locale/tr'
import {COLORS} from "../constants/Colors";

function RentBottomSheet({onCloseAction,costPerDay}) {

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
                    <Text style={{color: COLORS.colorWhite}}>Select Date</Text>
                </TouchableOpacity>
                }
                {startDate !== null &&
                <Text onPress={() => setIsDatePickerVisible(true)}
                      style={{padding: 10, marginTop: 15, color: COLORS.colorPrimaryLight, fontSize: 18}}>
                    {moment(startDate).locale("tr", localization).format('l')} - {moment(endDate).locale("tr", localization).format('l')}
                </Text>
                }
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{padding: 10, marginTop: 5, fontSize: 16}}>Cost per day: {costPerDay}$/day</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={{padding: 10, marginTop: 5, fontSize: 16}}>Total Cost: 60$/day</Text>
            </View>
            <TouchableOpacity onPress={() => handleConfirmRent()}
                              style={[styles.button, {marginTop: 40}]}>
                <Text style={{color: COLORS.colorWhite}}>
                    CONFIRM RENT
                </Text>
            </TouchableOpacity>
            <DatePicker
                colorOptions={{
                    headerColor: COLORS.colorPrimary,
                    weekDaysColor: COLORS.colorPrimaryLight,
                    confirmButtonColor: COLORS.colorPrimary,
                    selectedDateBackgroundColor: COLORS.colorSecondary
                }}
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
        backgroundColor: COLORS.colorPrimaryLight,
        padding: 10,
        borderRadius: 10,
        width: "50%",
        alignSelf: "center",
        marginTop: 15
    },
});

export default RentBottomSheet;