const withPageActions = (contextObj, config) => {
    return {
        fetch: (criteria) => ({ type: `FETCH_${contextObj.actionContext.PLURAL}`, criteria, contextObj, config}),
        add: () => ({ type: `ADD_${contextObj.actionContext.SINGULAR}`, contextObj, config }),
        close: () => ({ type: `CLOSE_${contextObj.actionContext.SINGULAR}`, contextObj, config}),
        save: (entity) => ({ type: `SAVE_${contextObj.actionContext.SINGULAR}`, entity, contextObj, config }),
        deleteEntity: (id) => ({ type: `DELETE_${contextObj.actionContext.SINGULAR}`, id, contextObj, config}),
        download: (payload) => ({ type: `DOWNLOAD_${contextObj.actionContext.PLURAL}`, payload, contextObj, config}),
    }
}

export default withPageActions