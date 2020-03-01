import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProjectsMainScreen from "../screens/projects/ProjectsMainScreen";
import ClubsMainScreen from "../screens/clubs/ClubsMainScreen";
import MyProfileMainScreen from "../screens/myProfile/MyProfileMainScreen";
import MembersMainScreen from "../screens/members/MembersMainScreen";


class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const Drawer = createDrawerNavigator();

        return (
            <NavigationContainer>
                <Drawer.Navigator drawerType={'front'}>
                    <Drawer.Screen name="Projects" component={ProjectsMainScreen}/>
                    <Drawer.Screen name="Clubs" component={ClubsMainScreen}/>
                    <Drawer.Screen name="My Profile" component={MyProfileMainScreen}/>
                    <Drawer.Screen name="Members" component={MembersMainScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
};

export default Main;
