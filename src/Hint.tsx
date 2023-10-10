import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Hint = ({ description }: { description?: string }) => {

  // get thong tin thanh toan
  // thong tin user
  // hien thi thong tin user

  return (
    <View style={styles.hintLogin}>
      <Text>{description}</Text>
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

export default Hint;
