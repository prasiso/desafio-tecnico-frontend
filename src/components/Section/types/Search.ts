export interface SearchProps {
    modelValue: string
}

export interface SearchEmit{
    (event: "update:modelValue", value: string): void
}