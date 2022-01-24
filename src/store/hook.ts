import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as UsersActionsCreator from './template/actions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...UsersActionsCreator
    }, dispatch)
}