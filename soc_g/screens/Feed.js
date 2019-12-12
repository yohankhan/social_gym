import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { auth, storage } from '../assets/src/Config';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFileType: '',
			camera: ''
		};
	}

	_checkPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ camera: status });
	};

	findImage = async () => {
		this._checkPermissions();
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: 'Images',
			allowEditing: true,
			quality: 1
		});

		console.log(result);

		if (!result.Cancelled) {
			this.uploadImage(result.uri);
		} else {
			console.log('Cancelled');
		}
	};

	uploadImage = async (uri) => {
		var imageId = Math.floor(Math.random() * 999999 + 111);
		var re = /(?:\.([^.]+))?$/;
		var ext = re.exec(uri)[1];
		this.setState({ currentFileType: ext });

		const response = await fetch(uri);
		const blob = await response.blob();
		const imagePath = imageId + '.' + this.state.currentFileType;

		var userid = auth.currentUser.uid;
		var ref = storage.ref('posts/' + userid + '/img').child(imagePath);

		var snapshot = ref.put(blob).on('state_changed', (snapshot) => {
			console.log('progress', snapshot.bytesTransferred, snapshot.totalBytes);
		});
	};

	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Feed </Text>
				<Button title="upload Photo" onPress={this.findImage} />
			</View>
		);
	}
}

export default Feed;
