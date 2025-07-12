export interface ButtonProps {
    label: string
    border?: string
    borderColor?: string
    backgroundColor?: string
}

export interface ButtonEvent {
    (event: 'click', value: ButtonProps): void
}