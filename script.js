const resultado = document.getElementById('resultado')

api = fetch("https://blynk.cloud/external/api/get?token=w7GdfRWmZDHbTm6j9QidBtzLJ34DXwQS&v0&v1&v2&v3&v4").then(res => res.json()).then(dados => {
    criar(dados)
})


function criar(dados){

    let temp = dados.v0
    let umidade = dados.v1
    let pressao_rel = dados.v2
    let pressao_absl = dados.v3
    let qualidade_ar = dados.v4

    resultado.innerHTML = `
        <section class="container_info">
                <div class="descricao">
                    ${temp} °C
                </div>
            </div>
            <div class="container_info_s">
                <div class="icone_weather">
                    <div>Umidade</div>
                    <div>${umidade}%</div>
                </div>
                <div class="icone_weather">
                    <div>Pressão Relativa</div>
                    <div>${pressao_rel} hpa</div>
                </div>
                <div class="icone_weather">
                    <div>Pressão Absoluta</div>
                    <div>${pressao_absl.toFixed(0)} hpa</div>
                </div>
                <div class="icone_weather">
                    <div>Qualidade do Ar</div>
                    <div>${qualidade_ar.toFixed(1)} ppm</div>
                </div>
            </div>
        </section>
        `;
}
setTimeout(function(){ location.reload(); }, 120000)