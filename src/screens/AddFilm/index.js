import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';

const database = require('../../components/Handlers/database.js');

const AddFilm = props => {

    const navigation = useNavigation();

    const ratings = [
        'G',
        'PG',
        'PG-13',
        'R',
      ];

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [duration, setDuration] = useState('');
    const [releasedate, setReleaseDate] = useState('');

    const onFilmAdd = () => {
        if (!title){
            alert('Please enter a title.');
            return;
        }
        if (!duration){
            alert('Please enter a duration.');
            return;
        }
        if (!releasedate){
            alert('Please enter a release date.');
            return;
        }
        if (!rating){
            alert('Please select a rating.');
            return;
        }
        
        try {
            database.addFilm(title, rating, duration, releasedate);
        } catch (error) {
            console.log('Error adding film ' + error);
        }

        alert(title + ' Added!');
        navigation.navigate('Enter FilmCollector!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={title}
                onChangeText={value => setTitle(value)}
                style={styles.title}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Title'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={duration}
                onChangeText={value => setDuration(value)}
                style={styles.duration}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Duration'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={releasedate}
                onChangeText={value => setReleaseDate(value)}
                style={styles.releasedate}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Release Date'}
                placeholderTextColor={'grey'}
            />
            <SelectDropdown
            data={ratings}
            defaultButtonText={'Select Rating'}
            onSelect={(selectedItem, index) => {    
                setRating(selectedItem);         
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onFilmAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddFilm;