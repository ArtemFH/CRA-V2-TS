import {$instance} from "../api";
import {ITemplate} from "../../models/ITemplate";


const getTemplates = async () => {
    return await $instance.get<ITemplate[]>('users')
}

const exported = {
    getTemplates
}

export default exported
