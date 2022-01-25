import {RootState} from "../store/store";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as TemplatesActionsCreator from "../store/template/actions"

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...TemplatesActionsCreator,
    }, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;