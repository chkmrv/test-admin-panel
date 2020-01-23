import React, { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql';
import { Admin, Resource, Delete } from 'react-admin';

import buildQuery from './buildQuery'; // see Specify your queries and mutations section below
import { PostCreate, PostEdit, PostList } from '../components/admin/posts';
// https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr
class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {

        buildGraphQLProvider({ buildQuery })
            .then(dataProvider => this.setState({ dataProvider }));
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} />
            </Admin>
        );
    }
}

export default App;
