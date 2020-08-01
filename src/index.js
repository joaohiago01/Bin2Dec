import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
    const [numberBinary, setNumberBinary] = useState('');
    const [numberDecimal, setNumberDecimal] = useState('');

    function verifyTypeOnlyBinaryNumbers(number) {
        const numberVerify = number.split('').filter(digits => digits == 1 || digits == 0);
        var numberErr = '';
        numberVerify.map(digit => numberErr += digit);
        if (number != numberErr) {
            return false;
        } else {
            return true;
        }
    }
    function convert(number) {
        var decimal = parseInt(number, 2);
        setNumberDecimal(decimal);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {verifyTypeOnlyBinaryNumbers(numberBinary) == false ? (<Text style={{ marginBottom: 30, color: '#E32636' }}>Type Only 1 or 0.</Text>) : (<Text></Text>)}
            <TextInput
                placeholder='Insert Binary Number'
                style={{ borderWidth: 1, borderRadius: 10, width: 300, height: 50, paddingStart: 15 }}
                value={numberBinary}
                onChangeText={numberInput => setNumberBinary(numberInput)}
                keyboardType='numeric'
                maxLength={8}
            />
            <TouchableOpacity onPress={() => convert(numberBinary)} style={{ marginTop: 20, borderWidth: 1, borderRadius: 10, borderColor: '#3BE807', width: 150, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#3BE807', fontSize: 18 }}>Convert</Text>
            </TouchableOpacity>
            <TextInput
                placeholder='Result'
                style={{ borderWidth: 1, borderRadius: 10, borderColor: '#E32636', color: '#E32636', width: 300, height: 50, marginTop: 20, paddingStart: 15 }}
                editable={false}
                value={String(numberDecimal)}
            />
        </View>
    );
}

export default App;