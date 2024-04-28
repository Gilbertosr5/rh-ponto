import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

import Ionicon from "@expo/vector-icons/Ionicons"; // Daqui usar o "finger-print"

const Home = () => {
  // const [hasPermission, setHasPermission] = useState(null);
  // // const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  // const [cameraOn, setCameraOn] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission == null) {
  //   return <View />;
  // }

  // if (hasPermission === false) {
  //   return <Text>Sem permissão</Text>;
  // }

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.homeProfile}>
        <Text style={styles.h1}>Bem vindo(a) de volta!👋</Text>
        <View style={styles.image}>
          <Image
            style={styles.profilePhoto}
            source={require("../../../assets/img/profilePhotoDefault.png")}
          />
        </View>
        <Text style={styles.h2}>Gilberto Ribeiro</Text>
        <Text style={styles.description}>Desenvolvedor Web</Text>
      </View>
      <View></View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => {
            Alert.alert("Registrar Ponto");
          }}
        >
          <Ionicon name="finger-print" size={60} color="#FFF" />
        </Pressable>
        <Text style={styles.RegisterText}>Registrar Ponto</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: "#000",
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  homeProfile: {
    alignItems: "center",
  },
  h1: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  h2: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "600",
  },
  description: {
    color: "#FFF",
    fontWeight: "300",
    fontSize: 16,
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: "white",
    marginVertical: 15,
  },
  RegisterText: {
    color: "#FFF",
    fontSize: 18,
    marginTop: 5,
  },
  camera: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
