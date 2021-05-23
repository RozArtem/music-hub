import * as userActions from './users'
import * as trackActions from './track'
import * as currentUserActions from './currentUser'
import * as albumActions from './album'



export default {

    ...userActions,
    ...trackActions,
    ...currentUserActions,
    ...albumActions
}