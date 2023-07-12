import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { MaterialIcons, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import {
	Plant1,
	Plant2,
	Plant3,
	Plant4,
	Plant5,
	Plant6,
	Profile1,
	Profile2,
	Profile3,
	Profile4,
	Profile5,
	Profile6,
	Profile7,
} from "../constants/images";
const Home = ({ navigation }) => {
	//DATA
	const DATA = [
		{
			id: 1,
			name: "Plant 1",
			img: Plant1,
			favourite: false,
		},
		{
			id: 2,
			name: "Plant 2",
			img: Plant2,
			favourite: true,
		},
		{
			id: 3,
			name: "Plant 3",
			img: Plant3,
			favourite: false,
		},
		{
			id: 4,
			name: "Plant 4",
			img: Plant4,
			favourite: false,
		},
		{
			id: 5,
			name: "Plant 5",
			img: Plant5,
			favourite: false,
		},
		{
			id: 6,
			name: "Plant 6",
			img: Plant6,
			favourite: false,
		},
	];

	//reder New plants
	function renderNewPlants(item, index) {
		return (
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					marginHorizontal: SIZES.base,
				}}
			>
				<Image
					source={item.img}
					resizeMode="cover"
					style={{
						width: SIZES.width * 0.23,
						height: "82%",
						borderRadius: 15,
					}}
				/>
				{/* Plant Name */}
				<View
					style={{
						position: "absolute",
						bottom: "17%",
						right: 0,
						backgroundColor: COLORS.primary,
						borderBottomLeftRadius: 10,
						borderTopLeftRadius: 10,
						paddingHorizontal: SIZES.base,
					}}
				>
					<Text style={{ color: COLORS.white, ...FONTS.body4 }}>
						{item.name}
					</Text>
				</View>
				{/* Favourite */}
				<TouchableOpacity style={{ position: "absolute", top: "15%", left: 7 }}>
					{item.favourite ? (
						<AntDesign name="heart" size={20} color="red" />
					) : (
						<Entypo name="heart-outlined" size={24} color="black" />
					)}
				</TouchableOpacity>
			</View>
		);
	}
	// Total friends
	const [friendList, setFriendsList] = useState([
		{
			id: 0,
			img: Profile1,
		},
		{
			id: 1,
			img: Profile2,
		},
		{
			id: 2,
			img: Profile3,
		},
		{
			id: 3,
			img: Profile4,
		},
		{
			id: 4,
			img: Profile5,
		},
		{
			id: 5,
			img: Profile6,
		},
		{
			id: 6,
			img: Profile7,
		},
	]);

	function renderFriendComponent() {
		if (friendList.length == 0) {
			return <View></View>;
		} else if (friendList.length <= 3) {
			return friendList.map((item, index) => (
				<View
					key={`friend-${index}`}
					style={index == 0 ? {} : { marginLeft: -20 }}
				>
					<Image
						source={item.img}
						resizeMode="cover"
						style={{
							width: 50,
							height: 50,
							borderRadius: 25,
							borderColor: COLORS.primary,
							borderWidth: 1,
						}}
					/>
				</View>
			));
		} else {
			return (
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					{friendList.map((item, index) => {
						if (index <= 2) {
							return (
								<View
									key={`friend-${index}`}
									style={index == 0 ? {} : { marginLeft: -20 }}
								>
									<Image
										source={item.img}
										resizeMode="cover"
										style={{
											width: 50,
											height: 50,
											borderRadius: 25,
											borderColor: COLORS.primary,
											borderWidth: 3,
										}}
									/>
								</View>
							);
						}
					})}
					<Text
						style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}
					>
						+{friendList.length - 3} more
					</Text>
				</View>
			);
		}
	}
	return (
		<View style={{ flex: 1 }}>
			{/* New Plants */}
			<View style={{ height: "30%", backgroundColor: COLORS.white }}>
				<View
					style={{
						backgroundColor: COLORS.primary,
						flex: 1,
						borderBottomLeftRadius: 50,
						borderBottomRightRadius: 50,
					}}
				>
					<View
						style={{
							marginTop: SIZES.padding * 2,
							marginHorizontal: SIZES.padding,
						}}
					>
						{/* Heading */}
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							<Text style={{ color: COLORS.white, ...FONTS.h2 }}>
								New Plants
							</Text>
							<TouchableOpacity>
								<MaterialIcons
									name="filter-center-focus"
									size={24}
									color="white"
								/>
							</TouchableOpacity>
						</View>
						{/* ScrollView */}
						<View style={{ marginTop: SIZES.base }}>
							<FlatList
								horizontal
								showsHorizontalScrollIndicator={false}
								data={DATA}
								keyExtractor={(item) => item.id}
								renderItem={({ item, index }) => renderNewPlants(item, index)}
							/>
						</View>
					</View>
				</View>
			</View>
			{/* ?Today Items */}
			<View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
				<View
					style={{
						flex: 1,
						backgroundColor: COLORS.white,
						borderBottomLeftRadius: 50,
						borderBottomRightRadius: 50,
					}}
				>
					<View
						style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
								Today's Share
							</Text>
							<TouchableOpacity>
								<Text>see all</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/* !Pictures  */}
					<View
						style={{
							height: "88%",
							flexDirection: "row",
							marginTop: SIZES.base,
						}}
					>
						<View style={{ flex: 1, backgroundColor: COLORS.primary }}>
							<TouchableOpacity
								style={{ flex: 1, marginVertical: 7, marginHorizontal: 7 }}
								onPress={() => {
									navigation.navigate("Details");
								}}
							>
								<Image
									source={Plant3}
									resizeMode="cover"
									style={{ borderRadius: 25, width: "100%", height: "100%" }}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flex: 1,
									marginVertical: 7,
									marginHorizontal: 7,
									marginBottom: 18,
								}}
								onPress={() => {
									navigation.navigate("Details");
								}}
							>
								<Image
									source={Plant4}
									resizeMode="cover"
									style={{ borderRadius: 25, width: "100%", height: "100%" }}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1.3, backgroundColor: COLORS.primary }}>
							<TouchableOpacity
								style={{
									flex: 1,
									marginVertical: 7,
									marginHorizontal: 7,
									marginBottom: 18,
								}}
								onPress={() => {
									navigation.navigate("Details");
								}}
							>
								<Image
									source={Plant6}
									resizeMode="cover"
									style={{ borderRadius: 25, width: "100%", height: "100%" }}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
			{/* Added friends */}
			<View style={{ height: "20%", backgroundColor: COLORS.lightGray }}>
				<View style={{ flex: 1 }}>
					<View
						style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}
					>
						<Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
							Added Friends
						</Text>
						<Text style={{ color: COLORS.secondary, ...FONTS.body4 }}>
							{friendList.length} total
						</Text>
						<View style={{ flexDirection: "row", height: "60%" }}>
							<View
								style={{
									flex: 1.3,
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "row",
								}}
							>
								{renderFriendComponent()}
							</View>
							<View
								style={{
									flex: 1,
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "flex-end",
								}}
							>
								<Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
									Add Friend
								</Text>
								<TouchableOpacity style={{ margin: 5 }}>
									<Ionicons name="add-circle-outline" size={30} color="black" />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
