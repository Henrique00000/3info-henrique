import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarCor from "./screens/BuscarCor";

const Stack = createNativeStackNavigator();

export default function RootNavigation({ initialRouteName = "Home"}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Home",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                    }}
                    
                />
                <Stack.Screen
                    name="BuscarProduto"
                    component={BuscarProduto}
                    options={{
                        title: "Buscar produto",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarAnimal"
                    component={BuscarAnimal}
                    options={{
                        title: "Buscar animal",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarPessoa"
                    component={BuscarPessoa}
                    options={{
                        title: "Buscar pessoa",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCarro"
                    component={BuscarCarro}
                    options={{
                        title: "Buscar carro",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarFruta"
                    component={BuscarFruta}
                    options={{
                        title: "Buscar fruta",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="BuscarCor"
                    component={BuscarCor}
                    options={{
                        title: "Buscar cor",
                        headerStyle:{
                            backgroundColor: "#444",
                        },
                        headerTintColor: "#ececec",
                        headerLeft: null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}