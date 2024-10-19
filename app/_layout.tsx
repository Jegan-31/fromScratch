import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons,FontAwesome5,FontAwesome,Foundation,MaterialIcons } from "@expo/vector-icons";
import Login from "./index";
import CreateAccount from "./Register";
import Dashboard from "./Dashboard";
import Joinsch from "./Joinsh";
import ProfileScreen from "./ProfileScreen";
import Broucher from "./Broucher";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Add Divider */}
      <View style={styles.divider} />
      {/* Add more drawer items after the divider if needed */}
      <DrawerItem
        
        label="About Us"
        onPress={() => props.navigation.navigate('CreateAccount')} 
        icon={({ focused }) => (
          <MaterialIcons name="keyboard-arrow-right" size={22} color={focused ? '#000' : '#172743'} />
        )}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => props.navigation.navigate('')}
        icon={({ focused }) => (
          <MaterialIcons name="keyboard-arrow-right" size={22} color={focused ? '#000' : '#172743'} />
        )}
      />
      <DrawerItem
        label="Troubleshoot"
        onPress={() => props.navigation.navigate('')}
        icon={({ focused }) => (
          <MaterialIcons name="keyboard-arrow-right" size={22} color={focused ? '#000' : '#172743'} />
        )}
      />
      <View style={styles.divider} />
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <FontAwesome name="globe" size={20} color="#000" />
          <Text style={styles.contactText}>www.website.com</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="envelope" size={20} color="#000" />
          <Text style={styles.contactText}>info@website.com</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome name="phone" size={20} color="#000" />
          <Text style={styles.contactText}>+91 98410 12345</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} options= {{headerShown:false}} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options= {{headerShown:false}} />
    
      <Stack.Screen name="Maindrawer" component={DrawerNavigation} options= {{headerShown:false}} />
      {/* Add other stack screens here */}
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    //initialRouteName="Home"
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#fcfcfc', // Set your desired background color here
        
      },
      drawerLabelStyle: {
        color: '#172743', // Set text color for drawer items
      }
    }}
    >
      <Drawer.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{
        drawerIcon: ({ focused }) => (
          <Ionicons name="home-sharp" size={22} color={focused ? '#000' : '#172743'} />
        ),
        
      }}
      />
      <Drawer.Screen name="My Scheme" component={Dashboard}
      options={{
        drawerIcon: ({ focused }) => (
          <Foundation name="clipboard-notes" size={30} color={focused ? '#000' : '#172743'} />
        ),
      }}
      />
      <Drawer.Screen 
       name="Join Scheme"
       component={Joinsch} 
       options={{
        drawerIcon: ({ focused }) => (
          <FontAwesome5 name="hand-holding-usd" size={18} color={focused ? '#000' : '#172743'} />
        ),
      }}
       />
      <Drawer.Screen name="Brouchers" component={Broucher}
      options={{
        drawerIcon: ({ focused }) => (
          <Ionicons name="book" size={22} color={focused ? '#000' : '#172743'} />
        ),
      }}
      />
      <Drawer.Screen 
      name="Events" 
      component={Dashboard} 
      options={{
        drawerIcon: ({ focused }) => (
          <Ionicons name="calendar-outline" size={22} color={focused ? '#000' : '#172743'} />
        ),
      }}
      />
      <Drawer.Screen name="My Profile" component={ProfileScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <FontAwesome name="user-circle-o" size={22} color={focused ? '#000' : '#172743'} />
        ),
      }}
      />
      <Drawer.Screen name="Logout" component={Login}
      options={{
        drawerIcon: ({ focused }) => (
          <Ionicons name="log-out-outline" size={22} color={focused ? '#000' : '#172743'} />
        ),
      }}
       />
      {/* Add other screens to the drawer */}
    </Drawer.Navigator>
  );
};

const RootLayout = () => {
  return (


    <NavigationContainer independent={true}>
       <MainStack/>
    </NavigationContainer>
    // <Stack>
    //   <Stack.Screen name="index" options={{headerShown:false}}/>
    // </Stack>
  )
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc', // Divider color
    marginVertical: 10,
  },
  contactContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    marginLeft: 20,
    marginVertical: 5,
    fontSize: 14,
    color: '#555',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
});

export default RootLayout;
