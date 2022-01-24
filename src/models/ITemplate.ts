export interface ITemplate {
    id: number,
    name: string
}

export type ITemplateWithoutName = Omit<ITemplate, 'name'>;