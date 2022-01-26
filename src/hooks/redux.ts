import {RootState} from "../store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import * as TemplatesActionsCreator from "../store/template/actions"

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...TemplatesActionsCreator,
    }, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;