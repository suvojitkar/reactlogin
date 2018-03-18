import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TextInput, Image, ScrollView, ToolbarAndroid} from 'react-native';

type Props = {};
export default class Main extends Component<Props>{
  render() {
    return(
        <View>
        <ScrollView>
           <Image source = {require('./kolkata.jpg')} />
           <View style={styles.container}>
           <TextInput
               underlineColorAndroid = "grey"
               placeholder = "Email"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
           />

           <TextInput
               underlineColorAndroid = "grey"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
           />
           <Button onPress={() => {Alert.alert('You tapped the button!');}} title = "Login" color = "#3b5998" />
           </View>
        </ScrollView>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})