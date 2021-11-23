import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import * as Font from 'expo-font'

export default class header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false
        }
    }

    componentDidMount = async() => {
        await Font.loadAsync({
          Louis: require('../assets/fonts/Louis George Cafe.ttf'),
        })
        this.setState({ fontLoaded: true })
    }
    

    render() {	
    	return (
            <View style={styles.header}>
                <View style={styles.background}>
                    
                        {this.state.fontLoaded? (
                        <Text style={styles.headerText}>Home</Text>) :
                        (<ActivityIndicator size="large" />)
                        }
                        
                </View>
            </View>
        )
	}
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 25,
        color: '#BCBCBC',
        fontFamily: 'Louis'
    }
  });
  