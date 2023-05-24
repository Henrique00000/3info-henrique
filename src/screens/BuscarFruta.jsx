import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarFruta({navigation}){
    const [nomeDaFruta, setNomeDaFruta] = useState("");
    const [frutas, setFrutas] = useState([])

    async function queryFrutas(nomeDoAnimal = null){
        try{
            const frutasRef = collection(db, "Fruta");
            const queryAnimais = query(frutasRef, where("nome", "==", nomeDoAnimal));
            const querySnapshot = await getDocs(queryAnimais);
            const frutasTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    frutasTemp.push(doc.data());
                },
                setFrutas(frutasTemp)
        );
        
        }catch(error){console.log(error);
        }
    }

    useEffect(()=> {
        queryFrutas(nomeDaFruta);
    }
    , [nomeDaFruta])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Fruta</Text>
            <Text style={styles.subtitle}>Digite uma fruta em específico.</Text>
            <TextInput
                label="Digite o nome da fruta"
                value={nomeDaFruta}
                onChangeText={setNomeDaFruta}
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
                data={frutas}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.result}>Nome: {item.nome}</Text>
                        <Text style={styles.result}>Preço: {item.preco}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
           
        </View>
    )
}