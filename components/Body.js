import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { getEmployees } from '../services/empService';

const Body = () => {
    const [employees, setEmployees] = useState([]);

    React.useEffect(() => {
      getEmployees().then(result=>{
        console.log(result)
        setEmployees(result.data)
      });
    }, []);

  return (
    <View >
      <Text style={styles.container}>Dolgozók</Text>
      <FlatList 
        data={employees}
        renderItem={({item})=>(
        <View style={styles.item}>
            <View style={styles.row}> 
            <Text style={styles.idText}>Id: {item.id}</Text>
            <Text style={styles.idText}>Salary: {item.salary}</Text>
            </View>
           <View style={styles.row}> 
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.city}</Text>
           </View>
        </View>
        )}
      />
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gold',
        width: '100%',
        padding: 10,
    },
    item: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10,
        margin:5,
        borderRadius: 5,
        backgroundColor: 'lightblue',
    },
    text: {
        width: '50%',
        fontSize: 24,
    },
    row: {
        flexDirection: 'row',
    },
    idText: {
        textAlign: 'left',
        fontSize: 24,
        width: '50%',
    },
    
})