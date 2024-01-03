import React from 'react';
import { View , StyleSheet, Image , ScrollView , Dimensions, Text } from 'react-native';

const Index: React.FC = () => {
    const styles = StyleSheet.create({
        Index: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }
      });
    // 获取屏幕宽度
    const screenWidth = Dimensions.get('window').width;

    // 获取屏幕高度
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={{width: '100%',height: screenHeight,display: 'flex',flexDirection: 'column',padding: '3.5%'}}>
            <Text>index</Text>
        </View>
    )
}

export default Index;