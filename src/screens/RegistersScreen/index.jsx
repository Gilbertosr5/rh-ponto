import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import DayRegisters from "../../components/DayRegisters";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.registersScreenView}>
      <View style={styles.header}>
        <Text style={[styles.h1, { textAlign: "center" }]}>Registros</Text>
      </View>
      <ScrollView style={styles.calendarArea} indicatorStyle="white">
        <DayRegisters day={"01"} batidas={[]} />
        <DayRegisters day={"02"} batidas={[]} />
        <DayRegisters day={"03"} batidas={[]} />
        <DayRegisters day={"04"} batidas={[]} />
        <DayRegisters day={"05"} batidas={[]} />
        <DayRegisters day={"06"} batidas={[]} />
        <DayRegisters day={"07"} batidas={[]} />
        <DayRegisters day={"08"} batidas={[]} />
        <DayRegisters day={"09"} batidas={[]} />
        <DayRegisters day={"10"} batidas={[]} />
        <DayRegisters day={"11"} batidas={[]} />
        <DayRegisters day={"12"} batidas={[]} />
        <DayRegisters day={"13"} batidas={[]} />
        <DayRegisters day={"14"} batidas={[]} />
        <DayRegisters day={"15"} batidas={[]} />
        <DayRegisters day={"16"} batidas={[]} />
        <DayRegisters day={"17"} batidas={[]} />
        <DayRegisters day={"18"} batidas={[]} />
        <DayRegisters day={"19"} batidas={[]} />
        <DayRegisters day={"20"} batidas={[]} />
        <DayRegisters day={"21"} batidas={[]} />
        <DayRegisters day={"22"} batidas={[]} />
        <DayRegisters day={"23"} batidas={[]} />
        <DayRegisters day={"24"} batidas={[]} />
        <DayRegisters day={"25"} batidas={[]} />
        <DayRegisters day={"26"} batidas={[]} />
        <DayRegisters day={"27"} batidas={[]} />
        <DayRegisters day={"28"} batidas={[]} />
        <DayRegisters day={"29"} batidas={[]} />
        <DayRegisters day={"30"} batidas={[]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registersScreenView: {
    backgroundColor: "#000",
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 10,
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
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 10,
    width: "85%",
    marginBottom: 50,
  },
  calendarArea: {
    width: "90%",
  },
});
