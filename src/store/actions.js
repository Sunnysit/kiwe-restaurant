const getLineupSwitch = (context,payload) =>{
    context.commit('GET_LINEUP_SWITCH',payload);
}

const toggleLineupSwitch = (context) =>{
    context.commit('TOGGLE_LINEUP_SWITCH');
}

const getLoginId = (context,payload) =>{
    context.commit('GET_LOGIN_ID',payload);
}

const emptyWaitList = (context) => {
    context.commit('EMPTY_WAIT_LIST');
}

const pushToSmallList = (context,payload) => {
    context.commit('PUSH_TO_SMALL_LIST',payload);
}

const pushToMediumList = (context,payload) => {
    context.commit('PUSH_TO_MEDIUM_LIST',payload);
}

const pushToLargeList = (context,payload) => {
    context.commit('PUSH_TO_LARGE_LIST',payload);
}

const changeQueryDateYear = (context,payload) => {
    context.commit('CHANGE_QUERY_DATE_YEAR',payload);
}

const changeQueryDateMonth = (context,payload) => {
    context.commit('CHANGE_QUERY_DATE_MONTH',payload);
}

const changeQueryDateDay = (context,payload) => {
    context.commit('CHANGE_QUERY_DATE_DAY',payload);
}

const changeTableSizeSmall = (context,payload) => {
    context.commit('CHANGE_TABLE_SIZE_SMALL',payload);
}

const changeTableSizeMedium = (context,payload) => {
    context.commit('CHANGE_TABLE_SIZE_MEDIUM',payload);
}

const changeTableSizeLarge = (context,payload) => {
    context.commit('CHANGE_TABLE_SIZE_LARGE',payload);
}

export default {
    toggleLineupSwitch,
    getLineupSwitch,
    getLoginId,
    emptyWaitList,
    pushToSmallList,
    pushToMediumList,
    pushToLargeList,
    changeQueryDateYear,
    changeQueryDateMonth,
    changeQueryDateDay,
    changeTableSizeSmall,
    changeTableSizeMedium,
    changeTableSizeLarge
}