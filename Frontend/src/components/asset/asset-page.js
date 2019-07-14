import React from 'react'

import AssetForm from './asset-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const AssetPage = (props) => {
    return (
        <PageWrapper searchLabel="assets" {...props}>
            <AssetLines {...props}/>
            <AssetForm {...props} />
        </PageWrapper>
    )
}

const AssetLines = ({ assets }) => 
    assets.map((asset) => 
        <NavLink key={asset.id} 
            to={`/assets/${asset.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                {asset.title}
                <small>{asset.assetType}</small>
            </div>
            <p className="mb-1">{asset.description}</p>
        </NavLink>
    )

export default AssetPage