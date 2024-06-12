import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button, CheckBox } from "@rneui/themed";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Medidores({ navigation }: any) {
  const [loteo, setLoteo] = useState(0);
  const medidores = useSelector((state: any) => state.medidores);
  const loteos = useSelector((state: any) => state.loteos);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
        {loteos?.map((lot: any, index: number) => (
          <Button key={index} onPress={() => setLoteo(index)}>
            {lot.name}
          </Button>
        ))}
      </View>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Medidor</Text>
          <Text style={styles.tableHeaderText}>Lectura Anterior</Text>
          <Text style={styles.tableHeaderText}>Lectura Actual</Text>
          <Text style={styles.tableHeaderText}>Consumo</Text>
          <Text style={styles.tableHeaderText}>Modificado</Text>
        </View>
        {loteos[loteo].medidores?.map((medidor: any, index: number) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{medidor.medidor}</Text>
            <Text style={styles.tableCell}>{medidor.lectura_anterior}</Text>
            <Text style={styles.tableCell}>{medidor.lectura_actual}</Text>
            <Text style={styles.tableCell}>{medidor.consumo}</Text>
            <CheckBox
              textStyle={styles.tableCellCheckBoxText}
              iconRight
              size={30}
              checked={medidor.is_modificate}
              checkedColor='#448c27'
            />
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  tableCellCheckBoxText: {
    fontSize: 22,
  },
  medidoresContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

