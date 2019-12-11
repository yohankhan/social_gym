import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Splash from './screens/Splash';
import Sl from './screens/Sl';
import Signup from './screens/Signup';
import Login from './screens/Login';

import Feed from './screens/Feed';
import Activity from './screens/Activity';
import Search from './screens/Search';
import Profile from './screens/Profile';

const Tabnnavigator = createMaterialBottomTabNavigator(
	{
		FEED: {
			screen: Feed,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon style={[ { color: tintColor } ]} size={25} name={'ios-home'} />
					</View>
				)
			}
		},
		SEARCH: {
			screen: Search,
			navigationOptions: {
				tabBarLabel: 'Search',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon style={[ { color: tintColor } ]} size={25} name={'ios-search'} />
					</View>
				)
			}
		},
		ACTIVITY: {
			screen: Activity,
			navigationOptions: {
				tabBarLabel: 'Activity',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon style={[ { color: tintColor } ]} size={25} name={'ios-stats'} />
					</View>
				)
			}
		},
		PROFILE: {
			screen: Profile,
			navigationOptions: {
				tabBarLabel: 'Profile',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon style={[ { color: tintColor } ]} size={25} name={'ios-settings'} />
					</View>
				)
			}
		}
	},
	{
		initialRouteName: 'FEED',
		shifting: false,
		barStyle: { backgroundColor: '#040404' }
	}
);

const RootStack = createStackNavigator(
	{
		SPLASH: {
			screen: Splash,
			navigationOptions: {
				header: null
			}
		},
		SIGNUP: {
			screen: Signup,
			navigationOptions: {
				header: null
			}
		},
		LOGIN: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		SL: {
			screen: Sl,
			navigationOptions: {
				header: null
			}
		},
		MAIN: {
			screen: Tabnnavigator,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'SPLASH'
	}
);

const Appcontainer = createAppContainer(RootStack);

export default class App extends Component {
	render() {
		return <Appcontainer />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
