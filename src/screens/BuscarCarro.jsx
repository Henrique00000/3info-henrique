import { FlatList, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarCarro({ navigation }) {
    const [nomeDoCarro, setNomeDoCarro] = useState("");
    const [carros, setcarro] = useState([])

    async function queryCarros(nomeDoCarro = null) {
        try{
            const carroRef = collection(db, "Carro");
            const queryCarros= query(carroRef, where("Carro", "==", nomeDoCarro));
            const querySnapshot = await getDocs(queryCarros);
            const pessoaTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    pessoaTemp.push(doc.data());
                },
                setcarro(pessoaTemp)
        );
        
        }catch(error){console.log(error);
        }
    }
    useEffect(() => {
        queryCarros(nomeDoCarro);
    }
        , [nomeDoCarro])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Carro</Text>
            <Text style={styles.subtitle}>Digite a marca de um carro em específico.</Text>
            <TextInput
                label="Digite a marca do carro"
                value={nomeDoCarro}
                onChangeText={setNomeDoCarro}
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
                data={carros}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.result}>Marca: {item.marca}, nome: {item.nome}, ano: {item.ano}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}