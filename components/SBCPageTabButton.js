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
            <Text>
                {/*src={getImageUrl(iconImageSource)}*/}
            </Text>
            <Text>{tabName}</Text>
        </View>
    );
};