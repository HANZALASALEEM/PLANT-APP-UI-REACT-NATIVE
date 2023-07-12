// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import { plantBanner } from "../constants/images";
// import { COLORS, FONTS, SIZES } from "../constants/theme";
// import { Feather } from "@expo/vector-icons";
// const Details = ({ navigation }) => {
// 	function renderHeader() {
// 		return (
// 			<View
// 				style={{
// 					position: "absolute",
// 					top: 50,
// 					left: SIZES.padding,
// 					right: SIZES.padding,
// 				}}
// 			>
// 				<View style={{ flexDirection: "row" }}>
// 					<View
// 						style={{
// 							flex: 1,
// 						}}
// 					>
// 						<TouchableOpacity
// 							style={{
// 								alignItems: "center",
// 								justifyContent: "center",
// 								borderRadius: 20,
// 								backgroundColor: "rgba(255,255,255,0.5)",
// 								width: 40,
// 								height: 40,
// 							}}
// 							onPress={() => navigation.navigate("Home")}
// 						>
// 							{/* back arrow icon missing */}
// 						</TouchableOpacity>
// 					</View>
// 				</View>
// 			</View>
// 		);
// 	}

// 	const RequirmentBar = ({ icon, barPercentage }) => {
// 		return (
// 			<View style={{ height: 60, alignItems: "center" }}>
// 				<View
// 					style={{
// 						width: 50,
// 						height: 50,
// 						alignItems: "center",
// 						justifyContent: "center",
// 						borderRadius: 10,
// 						borderWidth: 1,
// 						borderColor: COLORS.gray,
// 					}}
// 				>
// 					<Image
// 						source={icon}
// 						resizeMode="cover"
// 						style={{ tintColor: COLORS.secondary, width: 30, height: 30 }}
// 					/>
// 				</View>
// 				{/* Bar */}
// 				<View
// 					style={{
// 						position: "absolute",
// 						bottom: 0,
// 						left: 0,
// 						width: "100%",
// 						height: 3,
// 						marginTop: SIZES.base,
// 						backgroundColor: COLORS.gray,
// 					}}
// 				></View>
// 				{/* PercentageBar */}
// 				<View
// 					style={{
// 						position: "absolute",
// 						bottom: 0,
// 						left: 0,
// 						width: barPercentage,
// 						height: 3,
// 						marginTop: SIZES.base,
// 						backgroundColor: COLORS.primary,
// 					}}
// 				></View>
// 			</View>
// 		);
// 	};
// 	function renderRequirmentBar() {
// 		return (
// 			<View
// 				style={{
// 					flexDirection: "row",
// 					marginTop: SIZES.padding,
// 					paddingHorizontal: SIZES.padding,
// 					justifyContent: "space-between",
// 				}}
// 			>
// 				<RequirmentBar
// 					icon={<Image source={require("../assets/images/sun.png")} />}
// 					barPercentage="50%"
// 				/>
// 			</View>
// 		);
// 	}

// 	const RequirmentDetail = ({ icon, lable, detail }) => {
// 		return (
// 			<View style={{ flexDirection: "row" }}>
// 				<View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
// 					<Image
// 						source={icon}
// 						resizeMode="cover"
// 						style={{ width: 30, height: 30, tintColor: COLORS.secondary }}
// 					/>
// 					<Text
// 						style={{
// 							marginLeft: SIZES.base,
// 							color: COLORS.secondary,
// 							...FONTS.h2,
// 						}}
// 					>
// 						{lable}
// 					</Text>
// 				</View>
// 				<View style={{ flex: 1, alignItems: "flex-end" }}>
// 					<Text
// 						style={{ color: COLORS.gray, ...FONTS.h2, marginLeft: SIZES.base }}
// 					>
// 						{detail}
// 					</Text>
// 				</View>
// 			</View>
// 		);
// 	};

// 	function renderRequirnemt() {
// 		return (
// 			<View
// 				style={{
// 					flex: 2.5,
// 					marginTop: SIZES.padding,
// 					paddingHorizontal: SIZES.padding,
// 					justifyContent: "space-around",
// 				}}
// 			>
// 				<RequirmentDetail
// 					icon={<Feather name="sun" size={24} color={COLORS.gray} />}
// 					lable="Sunlight"
// 					detail="25 C"
// 				/>
// 			</View>
// 		);
// 	}
// 	function renderFooter() {
// 		return (
// 			<View
// 				style={{
// 					flex: 1,
// 					flexDirection: "row",
// 					paddingVertical: SIZES.padding,
// 				}}
// 			>
// 				<TouchableOpacity
// 					style={{
// 						flexDirection: "row",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						backgroundColor: COLORS.primary,
// 						borderBottomRightRadius: 30,
// 						borderTopRightRadius: 30,
// 						paddingHorizontal: SIZES.padding,
// 					}}
// 					onPress={() => {
// 						console.log("Take Action");
// 					}}
// 				>
// 					<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
// 					{/* Arrow Icon missing*/}
// 				</TouchableOpacity>
// 				<View
// 					style={{
// 						flex: 1,
// 						flexDirection: "row",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						paddingHorizontal: SIZES.base,
// 					}}
// 				>
// 					<Text>Almost to week of growing time</Text>
// 					{/* down arrow icon missing */}
// 				</View>
// 			</View>
// 		);
// 	}
// 	return (
// 		<View style={styles.container}>
// 			{/* Banner */}
// 			<View style={{ height: "38%" }}>
// 				<Image
// 					source={plantBanner}
// 					resizeMode="cover"
// 					style={{ width: "100%", height: "100%" }}
// 				/>
// 			</View>
// 			{/* Requirment */}
// 			<View
// 				style={{
// 					flex: 1,
// 					marginTop: -40,
// 					backgroundColor: COLORS.lightGray,
// 					borderTopLeftRadius: 40,
// 					borderTopRightRadius: 40,
// 					paddingVertical: SIZES.padding,
// 				}}
// 			>
// 				<Text
// 					style={{
// 						paddingHorizontal: SIZES.padding,
// 						color: COLORS.secondary,
// 						...FONTS.h1,
// 					}}
// 				>
// 					Requirments
// 				</Text>
// 				{renderRequirmentBar()}
// 			</View>
// 		</View>
// 	);
// };

// export default Details;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// });

import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants/theme";

const RequirementBar = ({ icon, barPercentage }) => {
	return (
		<View style={{ height: 60, alignItems: "center" }}>
			<View
				style={{
					width: 50,
					height: 50,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 10,
					borderWidth: 1,
					borderColor: COLORS.gray,
				}}
			>
				<Image
					source={icon}
					resizeMode="cover"
					style={{
						tintColor: COLORS.secondary,
						width: 30,
						height: 30,
					}}
				/>
			</View>

			{/* Bar */}
			<View
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "100%",
					height: 3,
					marginTop: SIZES.base,
					backgroundColor: COLORS.gray,
				}}
			></View>

			<View
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: barPercentage,
					height: 3,
					marginTop: SIZES.base,
					backgroundColor: COLORS.primary,
				}}
			></View>
		</View>
	);
};

const RequirementDetail = ({ icon, label, detail }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
				<Image
					source={icon}
					resizeMode="cover"
					style={{
						tintColor: COLORS.secondary,
						width: 30,
						height: 30,
					}}
				/>

				<Text
					style={{
						marginLeft: SIZES.base,
						color: COLORS.secondary,
						...FONTS.h2,
					}}
				>
					{label}
				</Text>
			</View>
			<View style={{ flex: 1, alignItems: "flex-end" }}>
				<Text
					style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}
				>
					{detail}
				</Text>
			</View>
		</View>
	);
};

const PlantDetail = ({ navigation }) => {
	// Render

	function renderHeader() {
		return (
			<View
				style={{
					position: "absolute",
					top: 50,
					left: SIZES.padding,
					right: SIZES.padding,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							style={{
								width: 40,
								height: 40,
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 20,
								backgroundColor: "rgba(255,255,255,0.5)",
							}}
							onPress={() => {
								navigation.navigate("Home");
							}}
						>
							<Image
								source={require("../assets/images/left-arrow.png")}
								resizeMode="contain"
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={{
							flex: 1,
							alignItems: "flex-end",
							justifyContent: "center",
						}}
						onPress={() => {
							console.log("Focus on pressed");
						}}
					>
						<Image
							source={require("../assets/images/menus.png")}
							resizeMode="contain"
							style={{
								width: 25,
								height: 25,
							}}
						/>
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: "row", marginTop: "10%" }}>
					<View style={{ flex: 1 }}>
						<Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
							Glory Mantas
						</Text>
					</View>
					<View style={{ flex: 1 }}></View>
				</View>
			</View>
		);
	}

	function renderRequirementsBar() {
		return (
			<View
				style={{
					flexDirection: "row",
					marginTop: SIZES.padding,
					paddingHorizontal: SIZES.padding,
					justifyContent: "space-between",
				}}
			>
				<RequirementBar
					icon={require("../assets/images/sun.png")}
					barPercentage="50%"
				/>
				<RequirementBar
					icon={require("../assets/images/humidity.png")}
					barPercentage="25%"
				/>
				<RequirementBar
					icon={require("../assets/images/thermometer.png")}
					barPercentage="80%"
				/>
				<RequirementBar
					icon={require("../assets/images/seeds.png")}
					barPercentage="50%"
				/>
			</View>
		);
	}

	function renderRequirements() {
		return (
			<View
				style={{
					flex: 2.5,
					marginTop: SIZES.padding,
					paddingHorizontal: SIZES.padding,
					justifyContent: "space-around",
				}}
			>
				<RequirementDetail
					icon={require("../assets/images/sun.png")}
					label="Sunlight"
					detail="15°C"
				/>
				<RequirementDetail
					icon={require("../assets/images/humidity.png")}
					label="Water"
					detail="250 ML Daily"
				/>
				<RequirementDetail
					icon={require("../assets/images/thermometer.png")}
					label="Room Temp"
					detail="25°C"
				/>

				<RequirementDetail
					icon={require("../assets/images/seeds.png")}
					label="Fertilizer"
					detail="150 Mg"
				/>
			</View>
		);
	}

	function renderFooter() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					paddingVertical: SIZES.padding,
				}}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						flexDirection: "row",
						paddingHorizontal: SIZES.padding,
						alignItems: "center",
						justifyContent: "center",
						borderTopRightRadius: 30,
						borderBottomRightRadius: 30,
						backgroundColor: COLORS.primary,
					}}
					onPress={() => {
						console.log("Take Action");
					}}
				>
					<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>

					<Image
						source={require("../assets/images/right-arrow.png")}
						resizeMode="contain"
						style={{
							marginLeft: SIZES.padding,
							width: 20,
							height: 20,
						}}
					/>
				</TouchableOpacity>

				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						paddingHorizontal: SIZES.padding,
					}}
				>
					<Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>
						Almost 2 weeks of growing time
					</Text>
					<Image
						source={require("../assets/images/down-arrow.png")}
						resizeMode="contain"
						style={{
							tintColor: COLORS.secondary,
							marginLeft: SIZES.base,
							width: 20,
							height: 20,
						}}
					/>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* Banner Photo */}
			<View style={{ height: "35%" }}>
				<Image
					source={require("../assets/images/plantBanner.jpg")}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</View>

			{/* Requirements */}
			<View
				style={{
					flex: 1,
					marginTop: -40,
					backgroundColor: COLORS.lightGray,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					paddingVertical: SIZES.padding,
				}}
			>
				<Text
					style={{
						paddingHorizontal: SIZES.padding,
						color: COLORS.secondary,
						...FONTS.h1,
					}}
				>
					Requirements
				</Text>

				{renderRequirementsBar()}

				{renderRequirements()}

				{renderFooter()}
			</View>

			{renderHeader()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default PlantDetail;
