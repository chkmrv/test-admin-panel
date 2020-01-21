import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import  { UserList }  from './users';
import authProvider from "./authProvider";
import "./App.css";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
    render() {
        return (
            <Admin dataProvider={dataProvider} authProvider={authProvider}>
                <Resource name="users" list={UserList} />
            </Admin>
        );
    }
}
export default App;
