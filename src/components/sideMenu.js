import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styleSheet';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';

class SideMenu extends Component {
    navigateToScreen = (drawer) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: drawer
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.containerSideMenu}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Trash')}>
                                Trash
              </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Archieve')}>
                                Archieve
              </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Remainder')}>
                                Remainder
              </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;