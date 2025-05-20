import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useState, useEffect } from 'react';

interface Country {
  code: string;
  name: string;
}

const worldCupCountries = [
  'ar', 'au', 'be', 'br', 'ca', 'cm', 'cl', 'cr', 'hr', 'dk',
  'ec', 'eg', 'gb-eng', 'gb-wls', 'fr', 'de', 'gh', 'gr', 'hn',
  'is', 'ir', 'it', 'jp', 'mx', 'ma', 'nl', 'ng', 'kp', 'pe',
  'pl', 'pt', 'ie', 'ro', 'ru', 'sa', 'sn', 'rs', 'za', 'kr',
  'es', 'se', 'ch', 'tn', 'tr', 'us', 'uy', 've'
];

export default function CountriesScreen() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://flagcdn.com/en/codes.json');
        const data = await response.json();
        
        const countryArray = Object.entries(data)
          .map(([code, name]) => ({
            code,
            name: name as string
          }))

          .filter(item => worldCupCountries.includes(item.code));
        
        setCountries(countryArray);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryPress = (countryCode: string, countryName: string) => {
    // Handle country selection
    console.log(`Selected country: ${countryName} (${countryCode})`);
    // You can navigate to another screen or perform other actions here
  };

  if (!fontsLoaded || loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, styles.heading]}>Countries</Text>
      <View style={styles.bodycontainer}>
        <Text style={styles.text}>Choose a country to see details</Text>
        
        <FlatList
          data={countries}
          keyExtractor={(item) => item.code}
          numColumns={3}
          contentContainerStyle={styles.flagGrid}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.flagBox}
              onPress={() => handleCountryPress(item.code, item.name)}
            >
              <Image 
                source={{ uri: `https://flagcdn.com/w320/${item.code}.png` }}
                style={styles.flagImage}
                resizeMode="contain"
              />
              <Text style={styles.flagText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    backgroundColor: '#121212',
    padding: 16,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'SpaceMono-Regular',
    textAlign: "center"
  },
  heading: {
    fontSize: 24,
    marginBottom: 8
  },
  bodycontainer: {
    flex: 1,
    width: '100%',
    gap: 20
  },
  flagGrid: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  flagBox: {
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    // backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderColor: "#345ceb",
    padding: 6,
  },
  flagImage: {
    width: 48,
    height: 36,
    marginBottom: 8,
  },
  flagText: {
    color: '#ffffff',
    fontFamily: 'SpaceMono-Regular',
    fontSize: 12,
    textAlign: 'center',
  }
});