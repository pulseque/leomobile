import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Layout from "../../common/Layout";

class MyHistoryScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Layout>
                <View>
                    <Text>My History screen</Text>
                </View>
            </Layout>
        )
    }
};

export default MyHistoryScreen;
