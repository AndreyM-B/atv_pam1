import { StyleSheet, Text, SafeAreaView, Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function tbl_categoria() {
    return (

        <SafeAreaView style={styles.container}>
            {/*imagem de login */}
            <View style={styles.topo}>

                <Image
                    style={styles.login}
                    source={require('./assets/livros.png')}
                />
            </View>
            {/*titulo de login */}
            <Text style={styles.texto}>CADASTRAR CATEGORIA</Text>

            {/*TEXTINPUT DE E-MAIL */}
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder='NOME CATEGORIA' keyboardType='email-address' />
            </View>

            {/*TEXTINPUT DE SENHA */}
            <View style={styles.containerTextInput}>
                <TextInput style={[styles.textInput, styles.multilineText]} placeholder='OBSERVAÇÕES' multiline />
            </View>
            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.btnCad}>
                <Text style={styles.txtCad}>CADASTRAR</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    topo: {
        alignItems: 'center'
    },
    login: {
        width: 400
    },
    texto: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30
    },
    containerTextInput: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: 'center'
    },
    textInput: {
        padding: 10
    },
    btnCad: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30
    },
    txtCad: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff'
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top'
    }


});
