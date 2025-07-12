export const statuTask = {
    pending: {
        value: 'pending' as statusTaskEnum.pending,
        config: {
            icon: 'i-mdi-account-clock',
            color: '#FFE4E6' as '#FFE4E6'
        },
        name: 'Pendente'
    },
    waiting: {
        value: 'waiting' as statusTaskEnum.waiting,
        config: {
            icon: 'i-mdi:clock-time-four-outline',
            color: '#FEF7C3' as '#FEF7C3'
        },
        name: 'Agurdando'
    },
    finished: {
        value: 'finished' as statusTaskEnum.finished,
        config: {
            icon: 'i-mdi-check-bold',
            color: ' #DBECFF' as ' #DBECFF'
        },
        name: 'Preenchida'
    },
    canceled: {
        value: 'canceled' as statusTaskEnum.canceled,
        config: {
            icon: 'i-mdi-alert',
            color: ' #FFE4E6' as ' #FFE4E6'
        },
        name: 'Cancelada'
    },
}

export enum statusTaskEnum {
    'pending' = 'pending',
    'waiting' = 'waiting',
    'finished' = 'finished',
    'canceled' = 'canceled',
}