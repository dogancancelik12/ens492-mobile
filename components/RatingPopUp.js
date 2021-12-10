import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../constants/Colors";
import {AirbnbRating} from "react-native-ratings";

function RatingPopUp({
                        negativeButtonAction,
                        positiveButtonAction,
                        title,
                        positiveButtonText = "OK",
                        negativeButtonText = "Cancel"
                    }) {

    const [rating, setRating] = useState(null)

    const handleConfirm = () => {
        if (rating) {
            positiveButtonAction(rating)
        } else {
            Alert.alert("Please select rating!")
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <AirbnbRating starContainerStyle={{marginTop: 5}}
                                  isDisabled={false}
                                  showRating={false}
                                  count={5}
                                  defaultRating={0}
                                  size={20}
                                  onFinishRating={(rating) => setRating(rating)}
                    />
                    <View style={{flexDirection: "row", marginTop: 10}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleConfirm()}
                        >
                            <Text style={styles.textStyle}>{positiveButtonText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => negativeButtonAction()}
                        >
                            <Text style={styles.textStyle}>{negativeButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 10,
        width: 80,
        backgroundColor: colors.getColor().colorPrimaryLight
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16
    }
});

export default RatingPopUp;