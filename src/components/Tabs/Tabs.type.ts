export interface TabsProps {
    tabs: Tabs[]
    modelValue: Tabs
}

export interface TabsEmit {
    (event: 'update:modelValue', value: Tabs): void
}

export interface Tabs {
    name: string
    slot: string
}