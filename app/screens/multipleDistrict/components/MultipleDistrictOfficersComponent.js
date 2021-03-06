import React from 'react';
import {
    View,
    Text, StyleSheet, ScrollView,
} from 'react-native';
import Layout from '../../../common/Layout';
import MultipleDistrictAPIService from '../services/MultipleDistrictAPIService';
import CardComponent from '../../../common/components/CardComponent';
import MultipleDistrictProfilePictureComponent from './MultipleDistrictProfilePictureComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import IconComponent from '../../../common/components/IconComponent';
import TableComponent from '../../../common/components/TableComponent';
import MemberDetailsService from '../../members/services/MemberDetailsService';
import MultipleDistrictDirectoryItemComponent from './MultipleDistrictDirectoryItemComponent';
import MultipleDistrictDetailsService from '../services/MultipleDistrictDetailsService';
import UserService from '../../../common/services/UserService';

const MultipleDistrictOfficersComponent: () => React$Node = (props) => {

    let multipleDistrict = props.route.params.multipleDistrict.multipleDistrict;
    let directory = props.route.params.multipleDistrict.directory;

    let goToMemberDetails = (memberId) => {
        props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    return (
        <>
            {MultipleDistrictDetailsService.isMultipleDistrictKeyOfficersAdded(directory) ?
                <ScrollView>
                    <View style={{padding: 15}}>
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>Multiple District Key Officers</Text>
                                </View>
                                <View>
                                    {
                                        directory.map((directoryItem, index) => {
                                            return <MultipleDistrictDirectoryItemComponent
                                                directoryItem={directoryItem}
                                                key={index}
                                                onPressProfilePicture={goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View>
                        </CardComponent>
                    </View>
                </ScrollView> : <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
                    <Text style={{color: '#777777', textAlign: 'center'}}>
                        No Multiple District Council Appointed.
                    </Text>
                </View>}
        </>
    );
};

export default MultipleDistrictOfficersComponent;
