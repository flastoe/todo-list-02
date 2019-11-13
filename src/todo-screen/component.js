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
  onPress={() => { onPress(color); }}
  style={[
    styles.colorButton,
    { backgroundColor: color },
    selected && { borderWidth: 3, borderColor: color === 'white' ? 'black' : 'white' }
  ]}  />

// TODO
const TodoComponent = ({
  inputText,
  selectedColor,
  toDos,
  onInput,
  onSelectColor,
  onAdd
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo Screen</Text>
    <TextInput
      placeholderTextColor="white"
      style={styles.input}
      value={inputText}
      placeholder="Add todo..."
      onChangeText={onInput}
    />
    <View>
      <ScrollView horizontal>
        <View style={styles.colorContainer}>
          {colors.map(color => (
            <ColorButton
              key={color}
              color={color}
              selected={color === selectedColor}
              onPress={onSelectColor}  />
          ))}
        </View>
      </ScrollView>
    </View>
    <Button
      disabled={inputText === '' || selectedColor === ''}
      title="Add"
      onPress={onAdd} />
    <FlatList
      data={toDos}
      keyExtractor={({ index }) => `${index}`}
      renderItem={({ item, index }) => (
        <View>
        <Text style={{ color: item.color }}>{item.title}</Text>
        <Button title="Done" />
      </View>)}
    />
  </View>
);

export default TodoComponent;