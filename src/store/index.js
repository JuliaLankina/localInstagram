import { compose } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './components/reducers/reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
)

export default store