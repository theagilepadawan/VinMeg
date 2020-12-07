import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Vinglass from './wineGlass2.svg'
import { ListItem, Icon, Text } from 'react-native-elements'



interface WineEntry {
    name: string
    type: string
    price: number
}

export default function App() {
    const [red, setRed] = useState(false);
    const [brown, setBrown] = useState(false);
    const [white, setWhite] = useState(false);
    const [types, setTypes] = useState({red: "", white: "", brown: ""})

    const toggleRed = () => {
        setRed(!red)
        setTypes({...types, red: !red ? "red" : ""})
        console.log(types)
    }
    const toggleBrown = () => {
        setBrown(!brown)
        setTypes({...types, brown: !brown ? "brown" : ""})
        console.log(types)
    }
    const toggleYellow = () => {
        setWhite(!white)
        setTypes({...types, white: !white ? "white" : ""})
        console.log(types)

    }
    const exampleWines: Array<WineEntry> = [
        {
            name: "Wine 1",
            type: "red",
            price: 100,
        },
        {
            name: "Wine 2",
            type: "red",
            price: 190,
        },
        {
            name: "Wine 3",
            type: "white",
            price: 150,
        }
    ]

    const Item = ({name = " ", price = 0, type = ""}) => (
        <View style={styles.text}>
            <Text> {"Name: " + name + " Type: " + type + " Price: " + price}</Text>
        </View>
    );

    const renderItem = ({item}: any) => (
            <ListItem style={styles.items}>
                <Text style={{color: `${item.type}` , backgroundColor: "grey"}} h3>{`${item.name} - kr ${item.price}`}</Text>
            </ListItem>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.text}>VinMeg</Text>
            <StatusBar style="auto"/>

            <View style={styles.vinContainer}>
                <View style={styles.vin}>
                    <Vinglass onPress={toggleRed} height={100} width={100} fill={red ? "red" : "black"}/>
                </View>

                <View style={styles.vin}>
                    <Vinglass onPress={toggleBrown} height={100} width={100} fill={brown ? "brown" : "black"}/>
                </View>

                <View style={styles.vin}>
                    <Vinglass onPress={toggleYellow} height={100} width={100} fill={white ? "yellow" : "black"}/>
                </View>
            </View>

            <FlatList data={exampleWines.filter( (e) => { return Object.values(types).includes(e.type) } )}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.name}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: "flex-start",
        marginTop: 50
    },
    text: {
        color: "#000",
        fontSize: 10,
        marginBottom: 20
    },
    vin: {
        marginBottom: 20
    },
    vinContainer: {
        display: "flex",
        flexDirection: "row",
    },
    items: {
        backgroundColor: "#000",
    }

});
