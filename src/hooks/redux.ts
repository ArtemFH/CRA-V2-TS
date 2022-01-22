import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStore} from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelectior: TypedUseSelectorHook<AppStore> = useSelector
