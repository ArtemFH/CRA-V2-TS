import {ITemplate} from "../../models/ITemplate";
import {createAsyncThunk} from "@reduxjs/toolkit";
import templatesApi from "../../api/requests/template"

export const fetchTemplates = createAsyncThunk<ITemplate[]>('template', async () => {
    const response = await templatesApi.getTemplates()
    return response.data;
})
