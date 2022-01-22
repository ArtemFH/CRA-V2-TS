import {$instance} from "../api";
import {IUser} from "../../models/IUser";

const getUsers = async () => {
    return await $instance.get<IUser[]>('users')
}

const exported = {
    getUsers
}

export default exported