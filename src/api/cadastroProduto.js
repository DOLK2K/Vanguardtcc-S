import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarProduto(descricao, tipo, categoria, unidade, situacao) {
    const resp = await api.post('/filme', {
        descricao: descricao,
        tipo: tipo,
        categoria: categoria,
        unidade: unidade,
        situacao: situacao
    })
        return resp.data
}


export async function enviarImagem(id, imagem) {
    const formData = new FormData()
    formData.append('capa', imagem);

    const resposta = await api.put(`/filme/${id}/capa`, formData, {
        headers: {
            "content-Type": "multipart/form-data"
        },
    })

    return resposta.status
}