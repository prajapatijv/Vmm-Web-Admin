import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import withPageActions from './with-page-action'
import { WithBasicLayout } from '../layouts'

import PropTypes from 'prop-types'

const WithPageContainer = (WrappedComponent, props, context) => {
    const contextObj = props.config.mappings[context]

    //Exapmles: userState, itemState
    const stateName = `${contextObj.actionContext.singular}State`
    //Exapmles: users, items
    const listName = contextObj.actionContext.plural
    //Exapmles: user, item
    const entityName = contextObj.actionContext.singular

    //Generate actions
    const actions = withPageActions(contextObj, props.config)

    const mapActions = bindActionCreators(actions, useDispatch());

    const addAllowed = contextObj.actionContext.allowAdd === undefined ? true : Boolean(contextObj.actionContext.allowAdd)
    const deleteAllowed = contextObj.actionContext.allowDelete === undefined ? true : Boolean(contextObj.actionContext.allowDelete)
    const allowDownload = contextObj.actionContext.allowDownload === undefined ? true : Boolean(contextObj.actionContext.allowDownload)

    const mapState = (state) => {
        const localState = state[stateName]
        //const dynamicState = getDynamicState(localState, listName, entityName)
        return {
            [listName]: localState[listName],
            [entityName]: (props.id === undefined || localState[entityName] !== undefined) ?
                localState[entityName] :
                localState[listName].find(u => parseInt(u.id) === parseInt(props.id)),
            'documenttypes': localState.documenttypes,
            'eventtypes': localState.eventtypes,
            'areas': localState.areas,
            'samititypes': localState.samititypes,
            'states': localState.states,
            'districts': localState.districts,
            'talukas': localState.talukas,
            fetching: localState.fetching,
            saving: localState.saving,
            deleting: localState.deleting,
            listName: listName
        }
    }

    /*
    const getDynamicState = (localState, listName, entityName) => {
        const excludeItems = [entityName, listName, 'error', 'fetching', 'saving', 'deleting']
        var dynamicState = {};
        Object.keys(localState).forEach( (item) => {
            if (excludeItems.indexOf(item) < 0) {
                dynamicState[item] = localState[item]
            }
        })

        return dynamicState;
    }*/


    const state = useSelector(mapState)

    useEffect(() => {
        mapActions.fetch("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <WithBasicLayout>
            <WrappedComponent
                {...state}
                onSearch={mapActions.fetch}
                onAdd={() => { mapActions.add(); props.navigate(`/${listName}/0`) }}
                onClose={() => { mapActions.close(); props.navigate(`/${listName}`) }}
                onSave={mapActions.save}
                onDelete={mapActions.deleteEntity}
                onDownload={() => mapActions.download(state[state.listName])}
                allowAdd = {addAllowed}
                allowDelete = {deleteAllowed}
                allowDownload = {allowDownload}
            />
        </WithBasicLayout>
    )
}

export default WithPageContainer

WithPageContainer.propTypes = {
    config: PropTypes.object,
    mappings: PropTypes.array,
    actionContext: PropTypes.object,
    singular: PropTypes.string,
    plural: PropTypes.string,
    navigate: PropTypes.func,
    id: PropTypes.number
}