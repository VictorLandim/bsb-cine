import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

export const RootNavigator = createStackNavigator({
    Login: {
        screen: LoginForm
    },
    List: {
        screen: EmployeeList
    },
    Create: {
        screen: EmployeeCreate
    },
    Edit: {
        screen: EmployeeEdit
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => {
    return <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
};

const mapStateToProps = state => {
    return {
        nav: state.nav
    };
};

export default connect(mapStateToProps)(AppWithNavigationState);
