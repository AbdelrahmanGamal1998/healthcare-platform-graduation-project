import {combineReducers} from 'redux';
import testReducer from './testReducer';
import DocListReducer from './docListReducer';
import MoreInfoReducer from './moreInfoReducer';
import Toggle from './toggleReducer';
import DocProfileReducer from './docProfileReducer';
import PatientProfileReducer from './patientProfileReducer';
const rootReducer = combineReducers({

    loggedIn:testReducer,
    docList:DocListReducer,
    docMoreInfo:MoreInfoReducer,
    toggle:Toggle,
    docProfile:DocProfileReducer,
    patientProfile:PatientProfileReducer,
});

export default rootReducer;