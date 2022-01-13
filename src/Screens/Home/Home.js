import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import { AppColors } from '../../assets/AppColors'
import { FontSize } from '../../shared/Global.styles'
import { BackArrowIcon } from '../../shared/Icon.Comp'

export const Home = () => {
    const navigation=useNavigation()
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:FontSize.xxlarge,color:AppColors.green}}>Welcome To Journey App</Text>
<TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
    <Text>Go</Text>
</TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({})
