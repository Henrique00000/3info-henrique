import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";
export default function BuscarProduto({ navigation }) {
    const [nomeDoProduto, setNomeDoProduto] = useState("");
    const [produtos, setProdutos] = useState([])
    async function queryProdutos(nomeDoProduto = null) {
        try{
            const produtoRef = collection(db, "produto");
            const queryProduto= query(produtoRef, where("produto", "==", nomeDoProduto));
            const querySnapshot = await getDocs(queryProduto);
            const produtoTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    produtoTemp.push(doc.data());
                },
                setProdutos(produtoTemp)
        );
        
        }catch(error){console.log(error);
        }
    }
    useEffect(() => {
        queryProdutos(nomeDoProduto);
    }, [nomeDoProduto])

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Produto</Text>
            <Text style={styles.subtitle}>Digite o nome do produto</Text>
            <TextInput
                label='Digite o nome do produto'
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto}
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
                     data={produtos}
                     renderItem={({item}) => (
                         <View>
                             <Text style={styles.result}>Produto: {item.produto}</Text>
                             <Text style={styles.result}>Preço: {item.preco}</Text>
                         </View>
                     )}
                     keyExtractor={(item) => item.id}
                 />
        </View>
    )
}