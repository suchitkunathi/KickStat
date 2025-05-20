import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="light" /> */}
      <View style={styles.box}> 
        <Text style={styles.heading}>Welcome To</Text>
        <Image source={require('../assets/images/logo2.png')} style={styles.logo}></Image>
      </View>

      <View style={styles.bodycontainer}>
        <Text style={styles.text}>Get up-to-date Visualizations and Statisics of FIFA Fixtures, Players, Teams, and much more... !</Text>

        <View style={styles.linkscontainer}>

          <TouchableOpacity onPress={() => navigation.navigate('Countries')} style={styles.linkbox}>
            <Image source={require('../assets/images/country.png')} style={styles.image}></Image>
            <Text style={styles.text}>Countries</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Teams')} style={styles.linkbox}>
            <Image source={require('../assets/images/team.png')} style={styles.image}></Image>
            <Text style={styles.text}>Teams</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Players')} style={styles.linkbox}>
            <Image source={require('../assets/images/player.png')} style={styles.image}></Image>
            <Text style={styles.text}>Players</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Fixtures')} style={styles.linkbox}>
            <Image source={require('../assets/images/fixtures.png')} style={styles.image}></Image>
            <Text style={styles.text}>Fixtures</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 40
  },
  box: {
    paddingTop: 20,
    alignItems: "center",
    gap: 5
  },
  heading: {
    fontSize: 42,
    color: '#fff',
    fontFamily: 'SpaceMono-Regular',

    textAlign: "center"
  },
  logo: {
    height: 50,
    width: 200,
    fontWeight: 500
  },
  text: {
    color: "white",
    fontFamily: "SpaceMono-Regular",
    paddingHorizontal: 15,
    textAlign: "center"
  },
  image: {
    height: 80,
    width: 80
  },
  bodycontainer: {
    alignItems: "center",
    gap: 30
  },  
  linkscontainer: {
    borderWidth: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap"
  },
  linkbox: {
    height: 130,
    width: 130,

    gap: 5,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#345ceb",
    borderRadius: 10,
    padding: 10,
  }
});
