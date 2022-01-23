//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import Myscreen from './MyScreen';


//screen import
import Home from "./components/Home";
import Chat from "./components/Chat";
//import MyNavigator from "./MyNavigator";


const MainNavigator = createStackNavigator({
  Home: Home,
  Chat: Chat,
});

class Navigator extends React.Component {
  render(){
   return <MainNavigator/>;
  }
 }

 const AppContainer = createAppContainer(MainNavigator);
 export default AppContainer;