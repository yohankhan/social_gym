import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../assets/src/Config';



class Activity extends Component {
	signout = () => {
		auth.signOut();
		this.props.navigation.navigate('SPLASH');
	};

	render() {
		return (
			<View
				style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5 }}
			>
				<Text> feed </Text>
				<Button onPress={this.signout} title="logout" />
			</View>
		);
	}
}

export default Activity;
