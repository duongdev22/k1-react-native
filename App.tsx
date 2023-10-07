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


function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Text style={styles.logo}>facebook</Text>
      </View>
      <View style={styles.hintLogin}>
        <Text>Trước tiên bạn phải đăng nhập</Text>
      </View>
      <View style={styles.formLogin}>
        <View style={{ width: "100%", gap: 10 }}>
          <View style={styles.inputForm}>
            <View style={styles.textInput}>
              <Text>Email so dien thoai</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.textInput}>
              <Text>Mật khẩu</Text>
            </View>
          </View>
          <View style={styles.buttonLogin}>
            <Text style={styles.textButton}>Đăng nhập</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.buttonRegister}>
            <Text style={styles.textButton}>Đăng nhập</Text>
          </View>
          <Text style={styles.textForgotPassword}>Quên mật khẩu? Trung tâm trợ giúp</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 10, gap: 4 }}>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 10, gap: 4 }}>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
          <Text>Quen mat khau</Text>
        </View>
      </View>
      <Text style={{ textAlign: "center" }}>Facebook 2015</Text>
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
