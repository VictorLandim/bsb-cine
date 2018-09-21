import React from 'react';
import { FlatList, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem } from '../ListItem';
import { ListSeparator } from '../ListSeparator';

const SelectionList = ({ data, iconColor, onItemPress }) => (
    <View styles={styles.container}>
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem iconColor={iconColor} onPress={onItemPress} item={item} />}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={() => <ListSeparator />}
        />
    </View>
);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SelectionList;
