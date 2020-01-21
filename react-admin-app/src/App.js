//src/App.js
import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import  { UserList, UserEdit }  from './users';

import jsonServerProvider from "ra-data-json-server";

const dataProvider =
    jsonServerProvider("https://jsonplaceholder.typicode.com");
class App extends Component {
    render() {
        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="users" list={UserList} />
            </Admin>
        );
    }
}
export default App;
