export function takeDeposit(data : Object) {
    fetch('http://localhost:5000/transacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
    })
}

export function takeWithdraw(data : Object) {
    fetch('http://localhost:5000/transacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
    })
}


export function zerarDB(props : number) {

    for (let i = 1; i <= props; i++) {
        fetch('http://localhost:5000/transacoes/' + i, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
        })
    }

}
