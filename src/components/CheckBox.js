import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const CheckBox = ({options = [], multiple = false}) => {
    const [selected, setSelected] = useState([]);

    function toggle(id){
        let index = selected.findIndex(i => i === id);
        let arrSelecteds = [...selected];
        if(index !== -1){
            arrSelecteds.filter((i)=> i !== id);
        }else {
        multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
        }
        setSelected(arrSelecteds);
    }
    return(
    <View style={styles.container}>
        {options.map((op, index) => (
            <View style={styles.optionContainer}>
                <TouchableOpacity style={[styles.toucheble,{
                    backgroundColor: selected.findIndex(i=> i === op.id) !== -1 ? "red" : "#141414"
                }]} onPress={()=> toggle(op?.id)}>
							<Text style = {styles.dia}>																
								31 
							</Text>

							<Text style = {styles.nome_smn}>									
								Ter
							</Text>
                    
                </TouchableOpacity>
                
            </View>
        ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    margin:15
    },

    optionContainer:{
        flexDirection: "row",
        alignItems:"center",
    },

    toucheble:{
        justifyContent:"center",
		width:50,
		height:50,
		backgroundColor:"red",
		alignItems:"center",
		borderRadius:100,
    },

    optext:{
        marginLeft: 12,
        color:"#555",
        fontSize:16,
        fontWeight:"600",
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
});


export default CheckBox;