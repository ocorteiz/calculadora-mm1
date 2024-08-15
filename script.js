const btn = document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.form-container').forEach(container => container.remove());

        const formContainer = document.createElement('div');
        formContainer.className = 'form-container';

        if (this.classList.value.includes('p')) {
            formContainer.innerHTML = `
            <div class="form">
                <label for="taxaDeChegada">Taxa de chegada:</label>
                <input type="number" id="taxaDeChegada" required>
                <br>
                <label for="taxaDeServiço">Taxa de serviço:</label>
                <input type="number" id="taxaDeServiço" required>
                <br>
                <button class="submit p">Calcular</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        }

        if (this.classList.value.includes('l')) {
            formContainer.innerHTML = `
            <div class="form">
                <label for="taxaDeChegada">Taxa de chegada:</label>
                <input type="number" id="taxaDeChegada" required>
                <br>
                <label for="taxaDeServiço">Taxa de serviço:</label>
                <input type="number" id="taxaDeServiço" required>
                <br>
                <button class="submit l">Calcular</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        }

        if (this.classList.value.includes('lq')) {
            formContainer.innerHTML = `
            <div class="form">
                <label for="taxaDeChegada">Taxa de chegada:</label>
                <input type="number" id="taxaDeChegada" required>
                <br>
                <label for="taxaDeServiço">Taxa de serviço:</label>
                <input type="number" id="taxaDeServiço" required>
                <br>
                <button class="submit lq">Calcular</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        }

        if (this.classList.value.includes('w')) {
            formContainer.innerHTML = `
            <div class="form">
                <label for="taxaDeChegada">Taxa de chegada:</label>
                <input type="number" id="taxaDeChegada" required>
                <br>
                <label for="taxaDeServiço">Taxa de serviço:</label>
                <input type="number" id="taxaDeServiço" required>
                <br>
                <button class="submit w">Calcular</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        }

        if (this.classList.value.includes('wq')) {
            formContainer.innerHTML = `
            <div class="form">
                <label for="taxaDeChegada">Taxa de chegada:</label>
                <input type="number" id="taxaDeChegada" required>
                <br>
                <label for="taxaDeServiço">Taxa de serviço:</label>
                <input type="number" id="taxaDeServiço" required>
                <br>
                <button class="submit wq">Calcular</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        }

        this.insertAdjacentElement('afterend', formContainer);

        formContainer.querySelector('.form').style.display = 'block';

        formContainer.querySelectorAll('.submit').forEach(button => {
            button.addEventListener('click', function () {

                const divResult = formContainer.querySelector('#resultado')
                const taxaDeChegada = parseFloat(document.getElementById('taxaDeChegada').value);
                const taxaDeServico = parseFloat(document.getElementById('taxaDeServiço').value);

                if (isNaN(taxaDeChegada) || isNaN(taxaDeServico)) {
                    divResult.textContent  = 'Por favor, preencha todos os campos.';
                    divResult.style.color = 'red';
                } else if (this.classList.contains("p")) {
                    const taxaOcupacao = calcular(taxaDeChegada, taxaDeServico, "p");
                    divResult.textContent = `Taxa de ocupação = ${taxaOcupacao}%`;
                } else if (this.classList.contains("l")) {
                    const numMedio = calcular(taxaDeChegada, taxaDeServico, "l");
                    divResult.textContent = `Número médio de clientes no sistema = ${numMedio}`;
                } else if (this.classList.contains("lq")) {
                    const numMedio = calcular(taxaDeChegada, taxaDeServico, "lq");
                    divResult.textContent = `Número médio de clientes na fila = ${numMedio}`;
                } else if (this.classList.contains("w")) {
                    const tempMedio = calcular(taxaDeChegada, taxaDeServico, "w");
                    divResult.textContent = `Tempo médio no sistema = ${tempMedio}`;
                } else if (this.classList.contains("wq")) {
                    const tempMedio = calcular(taxaDeChegada, taxaDeServico, "wq");
                    divResult.textContent = `Tempo médio na fila = ${tempMedio}`;
                }

            });
        });

    });
});

function calcular(taxaDeChegada, taxaDeServico, tipo) {
    switch (tipo) {
        case 'p':
            return (taxaDeChegada / taxaDeServico)*100;
        case 'l':
            return taxaDeChegada / (taxaDeServico - taxaDeChegada);
        case 'lq':
            return (taxaDeChegada ** 2) / (taxaDeServico * (taxaDeServico - taxaDeChegada));
        case 'w':
            return 1 / (taxaDeServico - taxaDeChegada);
        case 'wq':
            return taxaDeChegada / (taxaDeServico * (taxaDeServico - taxaDeChegada));
        default:
            return 'Tipo de cálculo inválido.';
    }
}
