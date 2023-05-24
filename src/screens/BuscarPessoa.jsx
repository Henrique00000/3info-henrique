import { FlatList, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from "../utils/styles";

export default function BuscarPessoa({ navigation }) {
    const [nomeDaPessoa, setNomeDaPessoa] = useState("");
    const [pessoas, setPessoas] = useState([])

    async function queryPessoas(nomeDaPessoa = null) {
        try{
            const pessoaRef = collection(db, "Pessoa");
            const queryPessoa= query(pessoaRef, where("nome", "==", nomeDaPessoa));
            const querySnapshot = await getDocs(queryPessoa);
            const pessoaTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    pessoaTemp.push(doc.data());
                },
                setPessoas(pessoaTemp)
        );
        
        }catch(error){console.log(error);
        }
    }
    useEffect(() => {
        queryPessoas(nomeDaPessoa);
    }
        ,[nomeDaPessoa])
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Buscar Pessoa</Text>
                <Text style={styles.subtitle}>Digite o nome de uma pessoa em específico.</Text>
                <TextInput 
                    label="Digite o nome da pessoa"
                    value={nomeDaPessoa}
                    onChangeText={setNomeDaPessoa}
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
                     data={pessoas}
                     renderItem={({item}) => (
                         <View>
                             <Text style={styles.result}>Nome: {item.nome}</Text>
                             <Text style={styles.result}>sobrenome: {item.sobre}</Text>
                         </View>
                     )}
                     keyExtractor={(item) => item.id}
                 />
                
            </View>
        )
        }