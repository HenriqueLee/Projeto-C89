import React, { Component } from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CreatePost from '../Screens/Createpost'
import Feed from '../Screens/Feed'
import Profile from '../Screens/Profile'
import BottomTab from './BottomTab'
import StackNavigator from './Stack'
import firebase from 'firebase'
import CustomSidebarMenu from '../Screens/CustomSideBarMenu'
import Logout from '../Screens/Logout'
const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends Component {
  constructor() {
    super()
    this.state = {
      light_theme: true
    }
  }
  componentDidMount() {
    let theme
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', snapshot => {
        theme = snapshot.val().current_theme
        this.setState({ light_theme: theme === 'light' })
      })
  }
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#e91e63',
          
          drawerInactiveTintColor: this.state.light_theme ? 'black' : 'white',
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen name="Stack" component={StackNavigator}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
        { <Drawer.Screen name="Logout" component={Logout} /> }
      </Drawer.Navigator>
    )
  }
}
