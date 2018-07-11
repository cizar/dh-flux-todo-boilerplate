const createDispatcher = () => {
  let listeners = []

  const register = listener =>
    listeners.push(listener)

  const dispatch = action =>
    listeners.forEach(listener => listener(action))

  return { dispatch, register }
}

const dispatcher = window.dispatcher = createDispatcher()

export default dispatcher
