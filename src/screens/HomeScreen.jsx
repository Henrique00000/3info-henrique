import {View} from "react-native"
import {Text, Button} from "react-native-paper"
import styles from "../utils/styles"


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarProduto")}}
                style={styles.button}
            >Buscar Produto</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarAnimal")}}
                style={styles.button}
            >Buscar Animal</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarPessoa")}}
                style={styles.button}
            >Buscar Pessoa</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCarro")}}
                style={styles.button}
            >Buscar Carro</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarFruta")}}
                style={styles.button}
            >Buscar Fruta</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCor")}}
                style={styles.button}
            >Buscar Cor</Button>
        </View>
    )
}