import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React from 'react'
import OnboardingItem from './OnboardingItem'
import slide from './slide'
import { useRef, useState } from 'react'
import Paginator from './Paginator'

export default function Onboarding() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
    const viewableItemsChanged = useRef (({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 10}).current

  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
            <FlatList 
            data={slide} 
            renderItem={({item}) => <OnboardingItem item={item} />}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX } } }],{
                useNativeDriver: false
            })}
            scrollEventThrottle={52}
            onViewableItemsChanged={viewableItemsChanged}
            ref ={slideRef}
            viewabilityConfig = {viewConfig}

            />

            
        </View>
            <Paginator data={slide} scrollX = {scrollX}/>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})