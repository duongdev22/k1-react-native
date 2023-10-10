import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Logo = ({ title, count }: { title: string, count: number }) => {
  return (
    <View style={styles.headerLogo}>
      <Text style={styles.logo}>{title}</Text>
      <Text style={styles.logo}>{count}</Text>
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

export default Logo;
