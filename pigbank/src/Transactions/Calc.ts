export function calc(dados : any) {
        let totalDepositos = 0;
        let totalSaques = 0;
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].tipo === 'Depósito') {
                totalDepositos += dados[i].valor;
            } else {
                totalSaques += dados[i].valor;
            }
        }
        const saldoAtual = totalDepositos - totalSaques;
        const saquesTotais = totalSaques;
        const depositosTotais = totalDepositos;
        return {
            saldoAtual,
            saquesTotais,
            depositosTotais
        }
}
