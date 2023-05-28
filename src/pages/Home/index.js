import { StyleSheet, Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Action from '../../components/Actions';

const list =[
    {
        id:1,
        label:"Luz",
        value:'350,00',
        date: '17/05/2023',
        type: 0 //despesas  
    },
    {
        id:2,
        label:"gas",
        value:'80',
        date: '01/05/2023',
        type: 0 //despesas  
    },
    {
        id:3,
        label:"salario",
        value:'3000,00',
        date: '30/05/2023',
        type: 1 //receita  
    },
    {
        id:4,
        label:"Aula particulares",
        value:'300,00',
        date: '20/05/2023',
        type: 1 //receita  
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Alessandro Ramos" />
        
        <Balance saldo="18.000,00" gasto="300,00"/>

        <Action />
        <Text style={styles.title}>Ultimas Movimentações</Text>
        <FlatList 
            style={styles.list} 
            data={list} 
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            renderItem={( {item} )=> <Movements data={item} /> }
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
    marginStart:15,
    marginEnd:14,

  }
});
