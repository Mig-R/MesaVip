import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Image, Text, StyleSheet, TouchableOpacity, FlatList, StatusBar, TextInput} from "react-native";
import CheckBox from "../components/CheckBox";


export default function AgendarMesa() {
    
    return (
        <SafeAreaView style={styles.container}>
			<StatusBar/>
                <ScrollView style={styles.ScrollView}>

				<ImageBackground style = {styles.imgOutBack}
					source={require('../assets/outback.png')}  
					resizeMode = {'stretch'}>				
					
					<Text style = {styles.txtOutBack}>
						{"OutBack"}
					</Text>
					
					<Image style = {styles.seta}
						source={require('../assets/seta.png')}/>						
				</ImageBackground>

				<Text style = {styles.escolher_dia}>
					{"Escolher dia: "}
				</Text>

		
				<View style = {styles.horas}>
						
						<View>								
							<Text style = {styles.dia}>																
								31 
							</Text>

							<Text style = {styles.nome_smn}>									
								Ter
							</Text>
						</View>
						

					<View>
						<Text  style = {styles.dia}>							
							{"01"}
						</Text>

						<Text  style = {styles.nome_smn}>								
							{"Qua"}
						</Text>
					</View>

					<View>
						<Text  style = {styles.dia}>
							{"02"}
						</Text>

						<Text style = {styles.nome_smn}>
							{"Qui"}
						</Text>
					</View>
					
					<View>
						<Text  style = {styles.dia}>
							{"03"}
						</Text>

						<Text  style = {styles.nome_smn}>
							{"Sex"}
						</Text>
					</View>

					<View>
						<Text  style = {styles.dia}>
							{"04"}
						</Text>

						<Text  style = {styles.nome_smn}>
							{"Sáb"}
						</Text>
					</View>

					<View>
						<Text  style = {styles.dia}>
							{"05"}
						</Text>

						<Text  style = {styles.nome_smn}>
							{"Dom"}
						</Text>
					</View>

					<View>
						<Text  style = {styles.dia}>
							{"06"}
						</Text>

						<Text style = {styles.nome_smn}>
							{"Seg"}
						</Text>
					</View>
				</View>

				
			</ScrollView>
		</SafeAreaView>
		
    )
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",		
	},

	ScrollView: {
		flex: 1,
		backgroundColor: "#141414",
		paddingBottom: 42,
	},

	horas:{
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 22,
		marginHorizontal: 35,
		marginTop: 12,
		alignItems:"center",
	},

	imgOutBack:{
		paddingVertical: 22,
		marginBottom: 23,
	},

	txtOutBack:{
		color: "#FFFFFF",
		textAlign: "center",
		fontSize: 26,
	},

	escolher_dia:{
		color: "#FFFFFF",
		fontSize: 18,
		marginBottom: 14,
		left: 27,
	},

	seta:{
		tintColor: "#ffffff",
		width: 20,
		height: 19,
		marginBottom: 5,
		marginHorizontal: 30,
	},

	dia:{
		color: "#FFFFFF",
		fontSize: 17,
		textAlign:"center"
	},

	nome_smn:{
		bottom: 4,	
		color: "#FFFFFF",
		fontSize: 12,
	},

	btn_dia:{
		justifyContent:"center",
		width:50,
		height:50,
		backgroundColor:"red",
		alignItems:"center",
		borderRadius:100,
	}
});

