import React from "react";
import CreditCardDisplay from 'react-native-credit-card-display';
import {View} from "react-native";

function CreditCardItem({creditCard}) {

    return (
        <View style={{marginTop: 10, alignSelf: "center"}}>
            <CreditCardDisplay fontSize={20}
                               number={creditCard.cardNumber}
                               name={creditCard.cardTitle}
                               cvc={818}
                               expiration={creditCard.expireDate}
                               height={200}/>
        </View>
    )
}

export default CreditCardItem;

