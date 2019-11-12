import React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native';

import styles from './styles';

const colors = [
  'red',
  'green',
  'blue',
  'cyan',
  'magenta',
  'yellow',
  'orange',
  'pink',
  'white',
  'black'
];

const ColorButton = ({
  color,
  selected,
  onPress
}) => <TouchableOpacity
  style={[
    styles.colorButton,
    { backgroundColor: color }
  ]}  />

// TODO
const TodoComponent = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo Screen</Text>
    <TextInput
      placeholderTextColor="white"
      style={styles.input}
      placeholder="Add todo..."
    />
    <View>
      <ScrollView horizontal>
        <View style={styles.colorContainer}>
          {colors.map(color => <ColorButton key={color} color={color} />)}
        </View>
      </ScrollView>
    </View>
    <Button title="Add" />
    <FlatList
      data={[1, 2, 3]}
      renderItem={({ item}) => <Text>{item}</Text>}
    />
  </View>
);

export default TodoComponent;