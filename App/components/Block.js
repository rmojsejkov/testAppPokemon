import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

const Block = props => {
    return(
        <View style={{...styles.content, ...props.style}}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        backgroundColor: Colors.white
    }
});

export default Block;
