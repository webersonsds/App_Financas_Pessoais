

import React from "react";
import {AntDesign} from '@expo/vector-icons'

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'


export default function Actions() {
    return (
        <ScrollView style={styles.container}horizontal={true} showsHorizontalScrollIndicator={false}>

         <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.arebtn}>
              <AntDesign name="addfolder" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButon}>Entradas</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.arebtn}>
              <AntDesign name="tagso" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButon}>Compras</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.arebtn}>
              <AntDesign name="creditcard" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButon}>Carteira</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.arebtn}>
              <AntDesign name="barcode" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButon}>Boletos</Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.actionBtn}>
            <View style={styles.arebtn}>
              <AntDesign name="setting" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButon}>Conta</Text>
         </TouchableOpacity>

         
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      maxHeight:84,
      marginRight:14,
      marginTop: 18,
      paddingEnd:14,
      paddingStart: 14,

    },
    actionBtn:{
     alignItems:'center',
     marginRight:32
    },
    arebtn:{
       backgroundColor:'#ecf0f1' ,
       height:60,
       width:60,
       borderRadius:30,
       justifyContent:'center',
       alignItems:'center'
    },
    labelButon:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold'
    }

});
