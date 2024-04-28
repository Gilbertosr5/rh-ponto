import { View, Text, StyleSheet } from "react-native";

const DayRegisters = ({ day, batidas }) => {
  return (
    <View style={styles.dayArea}>
      <View style={styles.day}>
        <Text style={styles.h2}>{day}</Text>
      </View>
      <View style={styles.hoursArea}>
        <Text style={styles.hours}>07:00</Text>
        <Text style={styles.hours}>12:00</Text>
        <Text style={styles.hours}>13:00</Text>
        <Text style={styles.hours}>17:00</Text>
      </View>
    </View>
  );
};

export default DayRegisters;

const styles = StyleSheet.create({
  dayArea: {
    backgroundColor: "#ffffff1a",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  h2: {
    color: "#FFF",
    fontSize: 27,
    fontWeight: "600",
  },
  day: {
    borderRightColor: "#FFF",
    borderRightWidth: 3,
    paddingRight: 7,
  },
  hoursArea: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  hours: {
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 17,
  },
});
