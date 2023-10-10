/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

type TypedHeaderProps = {
  title: string
  description?: string
}

const Header = ({ title, description = "" }: TypedHeaderProps) => {

  console.log("description", description);
  
  return (
    <>
      <View style={styles.headerLogo}>
        <Text style={styles.logo}>{title}</Text>
      </View>
      <View style={styles.hintLogin}>
        <Text>{description}</Text>
      </View>
    </>
  )
}


function App() {
  return (
    <View style={styles.container}>
      <Header title={"facebook"} description="Trước tiên bạn phải đăng nhập" />
      <Header title='google' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100
  },
  headerLogo: {
    backgroundColor: "rgba(59,89,153,1)",
    height: 60,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  hintLogin: {
    backgroundColor: "#fffbe2",
    padding: 10
  },
  formLogin: {
    backgroundColor: "#eceff6",
    padding: 16,
    gap: 10,
    alignItems: "center",
    flex: 1
  },
  inputForm: {
    borderWidth: 0.75,
    borderColor: "#c4c8cb",
    borderRadius: 10,
    width: "100%"
  },
  textInput: {
    padding: 10,
  },
  line: {
    backgroundColor: "#c4c8cb",
    width: "100%",
    height: 0.75
  },
  buttonLogin: {
    width: "100%",
    height: 44,
    backgroundColor: "#5e74a5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonRegister: {
    backgroundColor: "#5187eb",
    paddingHorizontal: 30,
    // alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  },
  textForgotPassword: {
    color: "#8f9ebf",
    fontSize: 12,
    marginTop: 10
  }
});

export default App;
