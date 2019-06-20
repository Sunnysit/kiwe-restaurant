import { Object } from "core-js";

const TOGGLE_LINEUP_SWITCH = (state) =>{
    state.openLineUp = !state.openLineUp;
}

const GET_LINEUP_SWITCH = (state,payload) =>{
    state.openLineUp = payload;
}

const GET_LOGIN_ID = (state,payload) =>{
    state.loginId = payload;
}

const GET_RID = (state,payload) =>{
    state.rid = payload;
}


const GET_RNAME = (state,payload) =>{
    state.rName = payload;
}

const EMPTY_WAIT_LIST = (state) =>{
    state.waitLineSmall= [];
    state.waitLineMedium = [];
    state.waitLineLarge = [];

}

const PUSH_TO_SMALL_LIST = (state,payload) => {
    state.waitLineSmall.push(payload);
}

const PUSH_TO_MEDIUM_LIST = (state,payload) => {
    state.waitLineMedium.push(payload);
}

const PUSH_TO_LARGE_LIST = (state,payload) => {
    state.waitLineLarge.push(payload);
}

const CHANGE_QUERY_DATE_YEAR = (state,payload) => {
    state.queryDate.year = payload;
}

const CHANGE_QUERY_DATE_MONTH = (state,payload) => {
    state.queryDate.month = payload;
}

const CHANGE_QUERY_DATE_DAY = (state,payload) => {
    state.queryDate.date = payload;
}

const CHANGE_TABLE_SIZE_SMALL = (state,payload) => {
    state.sizeStandard.small = payload;
}

const CHANGE_TABLE_SIZE_MEDIUM = (state,payload) => {
    state.sizeStandard.medium = payload;
}

const CHANGE_TABLE_SIZE_LARGE = (state,payload) => {
    state.sizeStandard.large = payload;
}

export default {
    GET_LINEUP_SWITCH,
    TOGGLE_LINEUP_SWITCH,
    GET_LOGIN_ID,
    GET_RID,
    GET_RNAME,
    EMPTY_WAIT_LIST,
    PUSH_TO_SMALL_LIST,
    PUSH_TO_MEDIUM_LIST,
    PUSH_TO_LARGE_LIST,
    CHANGE_QUERY_DATE_YEAR,
    CHANGE_QUERY_DATE_MONTH,
    CHANGE_QUERY_DATE_DAY,
    CHANGE_TABLE_SIZE_SMALL,
    CHANGE_TABLE_SIZE_MEDIUM,
    CHANGE_TABLE_SIZE_LARGE

}