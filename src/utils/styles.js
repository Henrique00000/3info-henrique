import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Roboto",
    },

    button: {
        width: width * 0.7,
        height: 50,
        backgroundColor: "green",
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
        borderColor: "#777",
        borderWidth: 5,
    },

    title: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",

        textAlign: "center",
    },

    subtitle: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        margin: 50,
        textAlign: "center",

    },

    result: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        margin: 10,
    },

    input: {
        width: width * 0.7,
        height: 50,
        backgroundColor: "#555",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        borderColor: "#777",
        borderWidth: 1,
        marginBottom: 20,
    },

});

export default styles;

