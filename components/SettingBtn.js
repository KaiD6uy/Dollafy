import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton = ({buttonTitle, ... rest}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} {... rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '80%',
        height: windowHeight / 15,
        backgroundColor: '#4fd6b5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Roboto',
      },
})