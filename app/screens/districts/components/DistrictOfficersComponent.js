import React from 'react';
import {
    View,
    Text, StyleSheet, ScrollView,
} from 'react-native';
import Layout from '../../../common/Layout';
import moment from 'moment';
import CardComponent from '../../../common/components/CardComponent';
import DistrictProfilePictureComponent from './DistrictProfilePictureComponent';
import DistrictsAPIService from '../services/DistrictsAPIService';
import IconComponent from '../../../common/components/IconComponent';
import TouchableComponent from '../../../common/components/TouchableComponent';
import TableComponent from '../../../common/components/TableComponent';
import DistrictDirectoryItemComponent from './DistrictDirectoryItemComponent';
import DistrictDetailsService from '../services/DistrictDetailsService';

const DistrictOfficersComponent: () => React$Node = (props) => {

    let district = props.route.params.district.district;
    let directory = props.route.params.district.directory;

    let goToMemberDetails = (memberId) => {
        props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    return (
        <>
            {DistrictDetailsService.isDistrictKeyOfficersAdded(directory) ?
                <ScrollView>
                    <View style={{padding: 15}}>
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View>
                                    <Text style={{fontWeight: 'bold'}}>District Key Officers</Text>
                                </View>
                                <View>
                                    {
                                        directory.map((directoryItem, index) => {
                                            return <DistrictDirectoryItemComponent directoryItem={directoryItem}
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
                        No District Council Appointed.
                    </Text>
                </View>}
        </>
    );
};

export default DistrictOfficersComponent;
