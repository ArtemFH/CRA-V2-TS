import {RootState} from "./store";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as TemplatesActionsCreator from "./template/actions"
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...TemplatesActionsCreator,
    }, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;