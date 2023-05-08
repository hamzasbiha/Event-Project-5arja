import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkbox = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleChecked = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleChecked} style={styles.container}>
      <View style={checked ? styles.checkedBox : styles.uncheckedBox}>
        {checked && <Icon name="check" color="white" size={20} />}
      </View>
      <View style={styles.labelContainer}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    marginLeft: 10,
  },
});

export default Checkbox;
