import React from 'react'

import PopupForm from './popup-form'
import PageWrapper from '../shared/page-wrapper'

const PopupPage = (props) => {
    return (
        <PageWrapper searchLabel="popup" {...props}>
            <PopupLines {...props} />
            <PopupForm {...props} />
        </PageWrapper>
    )
}

const PopupLines = () => <div></div>

export default PopupPage