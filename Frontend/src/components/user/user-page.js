import React from 'react'

import UserForm from './user-form'
import NavLink from '../shared/navlink';
import PageWrapper from '../shared/page-wrapper'

const UserPage = (props) => {
    return (
        <PageWrapper searchLabel="users" {...props}>
            <UserLines {...props}/>
            <UserForm {...props} />
        </PageWrapper>
    )
}

const UserLines = ({ users }) => 
    users.map((user) => 
        <NavLink key={user.id} 
            to={`/users/${user.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
            >{user.firstName} {user.lastName}
        </NavLink>
    )

export default UserPage