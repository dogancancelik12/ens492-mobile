import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function SurbiPopUp({
                   negativeButtonAction,
                   positiveButtonAction,
                   title,
                   positiveButtonText = "OK",
                   negativeButtonText = "Cancel"
               }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => positiveButtonAction()}
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
        width: 70,
        backgroundColor: '#657cb1'
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

export default SurbiPopUp;