import React, { Component } from 'react';
import { View, Text, Image, Button, Dimensions } from 'react-native';
import bd from '../assets/bd.png';

const W = Dimensions.get('window');

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={{ height: W.height / 2 }}>
				<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center'}}>
					<View
						style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}
					>
						<Text>FOLLOWING</Text>
						<Image source={bd} style={{ width: 80, height: 100, borderRadius: 30 }} />
						<Text>FOLLOWERS</Text>
					</View>
					<Text style={{ alignItems: 'center' }}>@USERNAME</Text>
					<View
						style={{ flex: 1, flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' }}
					>
						<Button title="UPLOAD" />
						<Button title="EDIT" />
					</View>
				</View>
			</View>
		);
	}
}

export default Profile;
