import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { db, auth } from '../assets/src/Config';

import logo from '../assets/bd.png';
import bg from '../assets/bgx.png';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: '',
			email: ''
		};
	}

	submit_handler = () => {
		const { email, password } = this.state;
		auth.createUserWithEmailAndPassword(email,password)
		.then(()=>this.props.navigation.navigate('MAIN'))
		.catch(()=>Alert.alert("Please Provide Proper Information"));

		db.ref('/users').push({
			name: this.state.user,
			password: this.state.password,
			email: this.state.email,
			description: '',
			following_count: 0,
			followers_count: 0,
			post_count: 0,
			followers_names: '',
			following_names: '',
			// all the post will be save inside this path which will be provided to all the followers
			users_post_cache_Address: this.state.user + Math.floor((Math.random() * 999999) + 111),
			followers_post_cache_addr: '',
			users_post_container:''
		});
	};

	render() {
		return (
			<ImageBackground source={bg} style={{ width: '100%', height: '100%' }} resizeMode="cover">
				<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
					<Image source={logo} style={{ width: 140, height: 120 }} />
					<KeyboardAvoidingView behavior="position">
						<TextInput
							style={{
								width: 305,
								height: 40,
								borderRadius: 25,
								fontSize: 15,
								marginHorizontal: 25,
								backgroundColor: 'white',
								paddingLeft: 25,
								marginTop: 25,
								color: 'black',
								borderColor: 'black',
								borderWidth: 1
							}}
							placeholder="Email"
							onChangeText={(email) => this.setState({ email })}
						/>

						<TextInput
							style={{
								width: 305,
								height: 40,
								borderRadius: 25,
								fontSize: 15,
								marginHorizontal: 25,
								backgroundColor: 'white',
								paddingLeft: 25,
								marginVertical: 25,
								color: 'black',
								borderColor: 'black',
								borderWidth: 1
							}}
							placeholder="Username"
							onChangeText={(user) => this.setState({ user })}
						/>
						<TextInput
							style={{
								width: 305,
								height: 40,
								borderRadius: 25,
								fontSize: 15,
								marginHorizontal: 25,
								backgroundColor: 'white',
								paddingLeft: 25,
								marginBottom: 25,
								color: 'black',
								borderColor: 'black',
								borderWidth: 1
							}}
							placeholder="Password"
							onChangeText={(password) => this.setState({ password })}
						/>

						<TouchableOpacity onPress={this.submit_handler} style={{ marginHorizontal: 25 }}>
							<View
								style={{
									width: 305,
									height: 40,
									borderRadius: 25,
									backgroundColor: 'white',
									borderColor: 'black',
									borderWidth: 1,
									justifyContent: 'center'
								}}
							>
								<Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>Sign up</Text>
							</View>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</View>
			</ImageBackground>
		);
	}
}

export default Signup;

// const styles = StyleSheet.create({
// 	inputs: {
// 		width: 305,
// 		height: 35,
// 		borderRadius: 25,
// 		fontSize: 20,
// 		marginHorizontal: 25,
// 		backgroundColor: 'black',
// 		paddingLeft: 25,
// 		marginVertical: 25,
// 		color: 'white'
// 	},
// 	mybutn: {
// 		width: 305,
// 		height: 35,
// 		borderRadius: 25,
// 		backgroundColor: 'silver'
// 	}
// });
