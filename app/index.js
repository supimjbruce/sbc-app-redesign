/* sbc-app-redesign */
/* Home Page [index.js] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import SBCPageTabButton from '../components/SBCPageTabButton';

export default function Index() {
    const [isSideTabBarActive, setSideTabBarActive] = useState(false);
    return (
        <View style={styles.container}> {/*Make a ternary operator so the user can press a button to hide or view these*/}
            <View>
                {/*<Text>Navigation Bar</Text>*/}
                <View>
                    <Text>{/*SBC Logo*/}</Text>
                </View>
                <View>
                    <Text>{/*Navigation Sidebar Icon*/}</Text>
                    <View>
                        <Text>{/*Navigation Sidebar*/}</Text>
                            <View>
                                <Text>{/*Search Button Icon*/}</Text>
                            </View>
                            <View> {/*I think that some of these could go on the main page and switched
                            out with some of the other SBCPageTabButtons*/}
                                <TouchableOpacity style={styles.sideTabBarButton}>WATCH LIVE</TouchableOpacity>
                                <TouchableOpacity style={styles.sideTabBarButton}>SOCIAL MEDIA</TouchableOpacity>
                                <TouchableOpacity style={styles.sideTabBarButton}>Alert Management</TouchableOpacity>
                                <TouchableOpacity style={styles.sideTabBarButton}>CREDITS</TouchableOpacity>
                                <TouchableOpacity style={styles.sideTabBarButton}>Push Notification History</TouchableOpacity>
                                <TouchableOpacity style={styles.sideTabBarButton}>FEEDBACK & SUPPORT</TouchableOpacity>
                            </View>
                    </View>
                </View> 
            </View>
            <View>
                <View>
                    {/*<Text>List of Tabs</Text> - I think the entire tab list should be vertical, not in sections of three.*/}
                    {/*Think about how some of these pages can be on the side/off of the main page*/}
                    <View style={styles.tabPageButton}>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Event Schedule">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Maps">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Exhibits">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Book of Reports">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Resources">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Candidates">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Latest News">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Lifeway">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Road to Dallas">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Pastors' Conference">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Pre-File">
                        </SBCPageTabButton>
                        <SBCPageTabButton styles={styles.tabPageHeader}
                            tabName="Translation Services">
                        </SBCPageTabButton>
                    </View>
                    {/*<View>
                        <Image>{Event Schedule Icon}</Image>
                        <Text style={styles.tabPageHeader}>Event Schedule</Text>
                    </View>
                    <View>
                        <Image>{Maps Icon}</Image>
                        <Text style={styles.tabPageHeader}>Maps</Text>
                    </View>*/}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'dodgerblue',
    },

    tabPageButton: {
        alignItems: 'center',
    },

    tabPageHeader: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
    },

    sideTabBarButton: {
        textAlign: 'left',
        margin: 10,
    },
});