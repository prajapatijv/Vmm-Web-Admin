import React from 'react'

import CategoryForm from './category-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const CategoryPage = (props) => {
    return (
        <PageWrapper searchLabel="categories" {...props}>
            <CategoryLines {...props} />
            <CategoryForm {...props} />
        </PageWrapper>
    )
}

const CategoryLines = ({ categories }) =>
    categories.map((category) =>
        <NavLink key={category.id}
            to={`/categories/${category.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{category.name} {category.shortName}
        </NavLink>
    )
/*<table className="table table-hover">
    <thead>
        <tr>
            <td>Name</td>
            <td>Short Name</td>
        </tr>
    </thead>
    <tbody>
        {categories.map((category) =>  
        <tr>
            <td>{category.name}</td>
            <td>{category.shortName}</td>
        </tr>
        )}
    </tbody>
</table>*/


export default CategoryPage