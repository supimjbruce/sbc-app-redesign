/* sbc-app-redesign */
/* SBCPageTabButton [SBCPageTabButton.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function SBCPageTabButton({tabName}) {
    return (
        <View>
            <Image>{/*Image for the tab button*/}</Image>
            <Text>{tabName}</Text>
        </View>
    );
};