// import React, { Component } from "react";
// import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import buildGraphQLProvider from 'ra-data-graphql';
// import { ApolloClient, createNetworkInterface } from 'apollo-client';
// import  { UserList }  from './users';
// import authProvider from "./authProvider";
// import Dashboard from './Dashboard';
// import { createMuiTheme } from '@material-ui/core/styles';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/People';
// import { createNetworkInterface } from 'react-apollo';
// import { __schema as schema } from './schema';
// import "./App.css";
//
// buildGraphQLProvider({
//     introspection: { schema },
//     client: {
//         networkInterface: createNetworkInterface({
//             uri: 'https://efmk7otd2zbobpifz36ppguffe.appsync-api.eu-central-1.amazonaws.com/graphql?query=query%20one{%0A%20%20%20%20getBankTransactionsByState%28state:%20%22pending_identification%22%29%20{%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20uuid%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20booking_date%0A%20%20%20%20%20%20%20%20debtor_name%0A%20%20%20%20%20%20%20%20remittance_information%0A%20%20%20%20%20%20%20%20merchant_type,%0A%20%20%20%20%20%20%20%20state,%0A%20%20%20%20%20%20%20%20is_merchant_greylisted%0A%20%20%20%20}%0A}',
//         }),
//     },
// });
//
// const theme = createMuiTheme({
//     palette: {
//         type: 'light', // Switching the dark mode on is a single property value change.
//     },
// });
//
// class App extends Component {
//     constructor() {
//         super();
//         this.state = { dataProvider: null };
//     }
//     // componentDidMount() {
//     //     buildGraphQLProvider({ buildQuery })
//     //         .then(dataProvider => this.setState({ dataProvider }));
//     // }
//
//     componentDidMount() {
//         const client = new ApolloClient({
//             networkInterface: createNetworkInterface({
//                 uri: 'https://api.com/graphql',
//             });
//
//         buildApolloClient({ client }).then(restClient => this.setState({ restClient }));
//     }
//
//     render() {
//         const { dataProvider } = this.state;
//
//         if (!dataProvider) {
//             return <div>Loading</div>;
//         }
//
//         return (
//             <Admin dataProvider={dataProvider} theme={theme} dashboard={Dashboard} authProvider={authProvider}>
//                 <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} />
//                 <Resource name="users" list={UserList} options={{ label: 'My users' }} icon={UserIcon} />
//             </Admin>
//         );
//     }
// }
//
// export default App;
