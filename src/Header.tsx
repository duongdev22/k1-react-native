import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Logo from './Logo';
import Hint from './Hint';

type TypedHeaderProps = {
  title: string
  description?: string
  count: number
  check: boolean
  users: string[]
  currentUser: {
    id: string
    name: string
    address: string
  }
  onPress: () => void
}


function Header(props: TypedHeaderProps) {
  const { title, description = "", onPress, count } = props;

  // get danh ban be facebook
  // hien thi so luong ban be

  return (
    <>
      <Logo title={title} count={count} />
      <Hint description={description} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Click vao day</Text>
      </TouchableOpacity>
    </>
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
  button: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    alignItems: "center"
  }
});

export default Header;