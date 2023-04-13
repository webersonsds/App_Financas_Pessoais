
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../../components/header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions';
const  list = [

    {
        id: 1,
        label:'conta de luz',
        value: '300,90',
        date: '17/05/2022',
        type: 0
    },{
        id: 2,
        label:'pix cliente',
        value: '300,90',
        date: '2/04/2022',
        type:1
    },
    {
        id: 3,
        label:'salario',
        value: '7.200',
        date: '7/01/2022',
        type:1
    }
]




export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Weberson silva"/>

        <Balance saldo="9.450.90" gastos="-527,00"/>
      <Actions/>

      <Text style={styles.title}>Ùltimas movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
   margin:14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }

  
});
