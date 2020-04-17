import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style>footer</Text></View>
      <View style={styles.title}><Text>title</Text></View>
      <View style={styles.content}><Text>content</Text></View>
      <View style={styles.footer}><Text>footer</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    flex: 2,
    backgroundColor: 'pink',
  },
  title: {
    flex: 3,
    backgroundColor: 'blue',
  },
  content: {
    flex: 10,
    backgroundColor: 'yellow',
  },
  footer:{
    flex: 4,
    backgroundColor: 'green',
  }
});

export default App;
