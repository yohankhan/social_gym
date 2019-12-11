import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { str } from '../assets/src/Config';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null
		};
	}

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Feed </Text>
				<Button title="Select Photo" />
				<Button title="upload Photo" />
			</View>
		);
	}
}

export default Feed;
