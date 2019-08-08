const logger = store => next => action => {
  //eslint-disable-next-line 
  console.group(action.type)  
  //eslint-disable-next-line 
  console.info('dispatching', action) 
  let result = next(action)
  //eslint-disable-next-line 
  console.log('next state', store.getState()) 
  //eslint-disable-next-line 
  console.groupEnd() 
  return result
}

export default logger
