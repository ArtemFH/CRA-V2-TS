import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStore} from "./store";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as UsersActionsCreator from './template/actions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...TemplateActionsCreator
    }, dispatch)
}