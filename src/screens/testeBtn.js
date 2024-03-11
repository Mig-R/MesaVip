import React from "react";
import { SafeAreaView,View, StyleSheet, Text } from "react-native";
import CheckBox from "../components/CheckBox";

const CheckBoxPage = () => {
    const optionsumporvez = [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}];
    return(
        <SafeAreaView style={styles.container}>
        
            <Text style={styles.title}>selecione um dia</Text>
            <CheckBox options={optionsumporvez} onChange={(op)=> alert(op)}>
            
            </CheckBox>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141414",
        
    },

    title:{
        color:"#fff",
        size: 16,
        fontWeight:"700",
        textTransform:"uppercase",
        marginVertical:10,
        marginLeft:20,
    },
    optionsumporvez:{
        marginLeft:20,
    }
});

export default CheckBoxPage;