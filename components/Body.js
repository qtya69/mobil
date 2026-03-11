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
    <View>
      <Text>Body</Text>
      <FlatList 
        data={employees}
        renderItem={({item})=>(<View>
            <Text>{item.name}</Text>
        </View>
        )}
      />
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    
})