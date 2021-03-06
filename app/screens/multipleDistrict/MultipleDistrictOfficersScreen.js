import React from 'react';
import {
    View,
    Text, FlatList, ScrollView, StyleSheet, Button,
} from 'react-native';
import Layout from '../../common/Layout';
import CardComponent from '../../common/components/CardComponent';
import MultipleDistrictAPIService from './services/MultipleDistrictAPIService';
import MemberDetailsService from '../members/services/MemberDetailsService';
import MultipleDistrictDetailsService from './services/MultipleDistrictDetailsService';
import MultipleDistrictDirectoryItemComponent from './components/MultipleDistrictDirectoryItemComponent';
import {connect} from 'react-redux';
import ColorService from '../../common/services/ColorService';
import TouchableComponent from '../../common/components/TouchableComponent';
import IconComponent from '../../common/components/IconComponent';

class MultipleDistrictOfficersScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            directory: [],
            loading: true,
        };
    }

    componentDidMount(): void {
        this.getMultipleDistrictDetails();
    }

    getMultipleDistrictDetails = async () => {
        try {
            let currentUser = this.props.user.user;
            let multipleDistrictResult = await MultipleDistrictAPIService.getMultipleDistrictDetailsApi(MemberDetailsService.getMultipleDistrictId(currentUser));

            if (!multipleDistrictResult.data.error) {
                this.setState({
                    directory: multipleDistrictResult.data.data.directory,
                    loading: false,
                });
            }
        } catch (e) {
            console.log(e);
            this.setState({
                loading: false,
            });
        }
    };

    goToMemberDetails = (memberId) => {
        this.props.navigation.navigate('Member Details', {
            memberId: memberId,
        });
    };

    goToManageMultipleDistrictOfficers = () => {

    };

    isMultipleDistrictEditable = () => {
        //TODO: need to be improved
        return true;
    };

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout loading={this.state.loading} scrollEnabled={true}>
                <View style={{padding: 15}}>
                    {MultipleDistrictDetailsService.isMultipleDistrictKeyOfficersAdded(this.state.directory) ?
                        <CardComponent cardStyle={{padding: 0}}>
                            <View style={{
                                padding: 15,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderBottomColor: '#dddddd',
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'bold'}}>Multiple District Key Officers</Text>
                                    </View>

                                    {this.isMultipleDistrictEditable() ?
                                        <TouchableComponent onPress={this.goToManageMultipleDistrictOfficers}>
                                            <IconComponent.MaterialCommunityIcons name={'playlist-edit'} size={18}
                                                                                  color={ColorService.SECONDARY_COLOR_DARK}/>
                                        </TouchableComponent> : null}
                                </View>

                                <View>
                                    {
                                        this.state.directory.map((directoryItem, index) => {
                                            return <MultipleDistrictDirectoryItemComponent directoryItem={directoryItem}
                                                                                           key={index}
                                                                                           onPressProfilePicture={this.goToMemberDetails}
                                            />;
                                        })
                                    }
                                </View>
                            </View>
                        </CardComponent> : <View style={{flex: 1, alignItems: 'center', marginVertical: 50}}>
                            <Text style={{color: '#777777', textAlign: 'center'}}>
                                No Multiple District Council Appointed.
                            </Text>
                        </View>}
                </View>
            </Layout>
        );
    }
}

let mapStateToProps = state => ({
    user: state.user,
    permissions: state.permissions,
});

export default connect(mapStateToProps)(MultipleDistrictOfficersScreen);
