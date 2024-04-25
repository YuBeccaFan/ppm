import React from 'react';
import { useEffect, useState } from 'react';
import List from "./list";
import SearchPanel from "./searchPanel";
import * as qs from 'qs';
import cleanObject from '../../utils/cleanObject';
import useDebounce from '../../utils/useDounce';
import useMount from '../../utils/useMount';


const apiUrl = process.env.REACT_APP_API_URL

const ProjectListScreen = ({}) => {
    const [param, setParam] = useState({
        name: '',
        userId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const debouncedParam = useDebounce(param, 500);

    useEffect(()=> {
        const fetchList = async () => {
            const response = await fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`);
            const projects = await response.json();
            if (response.ok) {
                setList(projects)
            }
        };
        fetchList();
    },[debouncedParam]);

    useMount(()=> {
        const fetchUsers = async () => {
            const response = await fetch(`${apiUrl}/users`);
            const users = await response.json();
            if (response.ok) {
                setUsers(users)
            }
        };
        fetchUsers();
});

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </div>
    );
};

export default ProjectListScreen;