import React,{Component} from "react";
import { View } from "react-native";
import firebase from "firebase";
export default class Logout extends Component{
  componentDidMount(){
    firebase.auth().signOut()
    this.props.navigation.replace("login")
    alert("Until next time")
  }
  render(){
    return(
      <View></View>
    )
  }
}