import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/theme";
import Home from "../screens/Home";

import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CameraButton = () => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
				width: 50,
				height: 50,
				borderRadius: 25,
				backgroundColor: COLORS.primary,
			}}
		>
			<AntDesign name="camera" size={24} color="black" />
		</View>
	);
};

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const tintColor = focused ? COLORS.primary : COLORS.gray;

					switch (route.name) {
						case "Current":
							return <AntDesign name="home" size={24} color="black" />;
						case "Box":
							return <Feather name="box" size={24} color="black" />;
						case "Camera":
							return <CameraButton />;
						case "Search":
							return <AntDesign name="search1" size={24} color="black" />;
						case "Favourite":
							return <MaterialIcons name="favorite" size={24} color="black" />;
					}
				},
				tabBarShowLabel: false,
				tabBarStyle: {
					height: "10%",
				},
				// tabBarActiveTintColor: COLORS.primary,
				// tabBarInactiveTintColor: COLORS.gray,
			})}
		>
			<Tab.Screen
				name="Current"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Box"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Camera"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Search"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Favourite"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;

const styles = StyleSheet.create({});
