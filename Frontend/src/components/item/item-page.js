import React from 'react'

import ItemForm from './item-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const ItemPage = (props) => {
    return (
        <PageWrapper searchLabel="items" {...props}>
            <ItemLines {...props}/>
            <ItemForm {...props} />
        </PageWrapper>
    )
}

const ItemLines = ({ items}) => 
    items.map((item) => 
        <NavLink key={item.id} 
            to={`/items/${item.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
            >{item.itemName}
        </NavLink>
    )

export default ItemPage