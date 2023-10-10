import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './Header';

// string, boolean, number
// array, object, function

function App() {

  const a = "abc"
  let b = "xyz"

  console.log(1, typeof a)

  const array = ["abc", "xyz", 1, true, {}, []]

  console.log(2, typeof array)

  const object = { id: "0112331", name: "abc", address: "ha noi" }

  console.log(3, typeof object)


  let count = 0











  const onPress = () => {
    console.log("onPress")
    count = count + 1
    // count += 1
  }

  return (
    <View style={styles.container}>
      <Header
        title={"facebook"}
        description="Trước tiên bạn phải đăng nhập"
        currentUser={{ id: "1", name: "abc", address: "hanoi" }}
        count={3}
        check={true}
        users={["abc", "xyz"]}
        onPress={onPress}
      />
      {/* <Header title='google' /> */}
      {/* <Logo title="Instagram" /> */}
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
});

export default App;
