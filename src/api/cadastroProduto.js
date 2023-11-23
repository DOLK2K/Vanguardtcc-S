import axios from "axios";

const api = axios.create({
    baseURL: 'http://129.148.42.252:5015'
})


export async function cadastrarProduto(descricao, tipo, categoria, quantidade, disponivel, preco, frete, usuario) {
    const resp = await api.post('/produto', {
        descricao: descricao,
        tipo: tipo,
        categoria: categoria,
        quantidade: quantidade,
        disponivel: disponivel,
        preco: preco,
        frete: frete,
        id_usuario: usuario
    });
    return resp.data;
}



export async function enviarImagem(id, imagem) {
    const formData = new FormData()
    formData.append('capa', imagem);

    const resposta = await api.put(`/produto/${id}/capa`, formData, {
        headers: {
            "content-Type": "multipart/form-data"
        },
    })

    return resposta.status
}