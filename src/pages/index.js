import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Moviments from '../components/Moviments';
import Actions from '../components/Actions';

const list = [
    {
        id: 1,
        label: "Boleto conta de luz",
        value: "215,57",
        date: "17/09/2023",
        type: 0 //despesas /saída
    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: "2500,00",
        date: "16/09/2023",
        type: 1 //receitas / entrada
    },
    {
        id: 1,
        label: "Salário",
        value: "15.500,00",
        date: "15/09/2023",
        type: 1 //receitas / entrada
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Iury Sousa" /*cabeçalho*/ />
        
        <Balance saldo="16.035,55" gastos="-450,45" /*visor de renda*/ />

        <Actions /*botôes para ações*/ />

        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item)=> String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <Moviments data={item}/>}
        />

        <StatusBar style="auto" /*pra usar a tela toda*/ />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRigth: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 15,
    marginEnd: 15
  }
});
