import React, {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../constants';

const Register = props => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    Alert.alert('register');
  };

  return (
    <ImageBackground
      source={require('../assets/img/background.jpg')}
      style={styles.backgroundImg}>
      <KeyboardAvoidingView style={styles.body}>
        <Text style={styles.loginText}>Бүртгүүлэх</Text>
        <Text style={styles.inputLabel}>Регистрийн дугаар</Text>
        <TextInput style={styles.input} value={id} onChangeText={setId} />
        <Text style={styles.inputLabel}>Овог</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.inputLabel}>Нэр</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.inputLabel}>И-мэйл</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <TouchableOpacity
          style={styles.button}
          color={COLORS.BASE_COLOR}
          onPress={handleRegister}>
          <Text style={styles.buttonText}>Бүртгүүлэх</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerContainer}
          color={COLORS.BASE_COLOR}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.register}>Нэвтрэх</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
  },
  body: {
    position: 'absolute',
    bottom: 0,
    height: 'auto',
    width: '100%',
    paddingLeft: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    color: COLORS.BASE_COLOR,
  },
  input: {
    width: '90%',
    padding: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BASE_COLOR,
  },
  inputLabel: {
    color: '#a0a0a0',
    marginTop: 20,
  },
  passwordIconContainer: {
    paddingRight: 40,
    position: 'absolute',
    right: 0,
    top: 15,
  },
  button: {
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 50,
    width: 200,
    height: 50,
    marginLeft: -40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BASE_COLOR,
    shadowColor: COLORS.BASE_COLOR,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 50,
    marginLeft: -40,
  },
  register: {
    marginBottom: 30,
    alignSelf: 'center',
    color: COLORS.BASE_COLOR,
  },
});
