import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarAnimal({navigation}){
    const [nomeDoAnimal, setNomeDoAnimal] = useState("");
    const [animais, setAnimais] = useState([])

    async function queryAnimais(nomeDoAnimal = null){
        try{
            const animaisRef = collection(db, "animal");
            const queryAnimais = query(animaisRef, where("Nome", "==", nomeDoAnimal));
            const querySnapshot = await getDocs(queryAnimais);
            const animaisTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    animaisTemp.push(doc.data());
                },
                setAnimais(animaisTemp)
        );
        
        }catch(error){console.log(error);
        }
    }
    useEffect(()=> {
        queryAnimais(nomeDoAnimal);
    }, [nomeDoAnimal])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Animal</Text>
            <Text style={styles.subtitle}>Digite uma espécie em específico.</Text>
            <TextInput
                label="Digite a espécie do animal"
                value={nomeDoAnimal}
                onChangeText={setNomeDoAnimal}
                underlineColor="#fff"
                style={styles.input}
                theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#d3d3d3",
                        onSurfaceVariant: "#ececec",
                    }}
                    
                }
                outlineColor="#fff"
            />
            <FlatList 
                data={animais}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.result}>Nome: {item.Nome}</Text>
                        <Text style={styles.result}>Espécie: {item.Especie}</Text>
                        <Text style={styles.result}>Raça: {item.Raça}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                
            />
        </View>
    )
}