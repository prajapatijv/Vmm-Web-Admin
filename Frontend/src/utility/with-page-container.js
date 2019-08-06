import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import withPageActions from './with-page-action'
import { WithBasicLayout }  from '../layouts'

const WithPageContainer = (WrappedComponent, props, context ) => {

    const contextObj = props.config.mappings[context]

    //Exapmles: userState, itemState
    const stateName = `${contextObj.actionContext.singular}State`
    //Exapmles: users, items
    const listName = contextObj.actionContext.plural
    //Exapmles: user, item
    const entityName  = contextObj.actionContext.singular

    //Generate actions
    const actions = withPageActions(contextObj, props.config)

    const mapActions = bindActionCreators(actions, useDispatch());

    const mapState = (state) => {
        const localState = state[stateName]
        return {
            [listName]: localState[listName],
            [entityName]: (props.id === undefined || localState[entityName] !== undefined) ? 
                                localState[entityName] : 
                                localState[listName].find(u => parseInt(u.id) === parseInt(props.id)),
            fetching: localState.fetching,
            saving: localState.saving,
            deleting: localState.deleting
        }
    }
    

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
                onAdd={() => { mapActions.add(); props.navigate(`/${listName}/0`)} }
                onClose={() => {mapActions.close(); props.navigate(`/${listName}`) }}
                onSave={mapActions.save}
                onDelete={mapActions.deleteEntity}
            />
        </WithBasicLayout>
    )
}

export default WithPageContainer