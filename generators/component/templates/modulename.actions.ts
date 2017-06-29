export const CONTEXT: string = 'DASHBOARD';

/**
 * COUNTERAction  Interface
 */
interface I<%- Title %>Actions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
    GET_<%- CapsComponent %>_LIST: string;
    GET_<%- CapsComponent %>_SUCCESS: string;
    ADD_<%- CapsComponent %>: string;
    ADD_<%- CapsComponent %>_SUCCESS: string;
    ON_FAILED: string;
}

/**
 * COUNTER Actions List
 */
export const <%- Title %>Actions : I<%- Title %>Actions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED: `${CONTEXT}_INITIALIZED`,
    INIT_FAILED: `${CONTEXT}_INIT_FAILED`,
    GET_<%- CapsComponent %>_LIST: `${CONTEXT}_GET_<%- CapsComponent %>_LIST`,
    GET_<%- CapsComponent %>_SUCCESS: `${CONTEXT}_GET_<%- CapsComponent %>_SUCCESS`,
    ADD_<%- CapsComponent %>: `${CONTEXT}_ADD_<%- CapsComponent %>`,
    ADD_<%- CapsComponent %>_SUCCESS: `${CONTEXT}_ADD_<%- CapsComponent %>_SUCCESS`,
    ON_FAILED: `${CONTEXT}_ON_FAILED`,
};