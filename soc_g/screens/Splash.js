import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { auth } from '../assets/src/Config';
import logo from '../assets/bd.png';

class Splash extends Component {
	componentDidMount = () => {
		auth.onAuthStateChanged((user) => {
			this.props.navigation.navigate(user ? 'MAIN' : 'SIGNUP');
		});
	};

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<Image source={logo} style={{ width: 140, height: 120 }} />
				<Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>SOCIAL GYM</Text>
			</View>
		);
	}
}

export default Splash;
