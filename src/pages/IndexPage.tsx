import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchTemplates } from "../store/template/actions";

const Index: FC = () => {

    //пример использования хуков useAppSelector и useAppDispatch
    const dispatch = useAppDispatch()
    const data = useAppSelector(state=>state.template.data)
    useEffect(
        () => {
            dispatch(fetchTemplates())
        }, []
    )
    return (
        <>

        </>
    )
}
export default Index;