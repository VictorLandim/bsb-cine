import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from '../ListItem';
import { ListSeparator } from '../ListSeparator';
import { BLACK } from '../../config/colors';

const SelectionList = ({ data, iconColor, onItemPress }) => (
    <View styles={styles.container}>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <ListItem iconColor={iconColor} onPress={onItemPress} item={item} />
            )}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={() => <ListSeparator color={iconColor} />}
        />
    </View>
);

SelectionList.propTypes = {
    data: PropTypes.array,
    iconColor: PropTypes.string,
    onItemPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK,
    },
});

export default SelectionList;
