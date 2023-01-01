export default function handler(req, res) {
//Esse if verifica o método recebido na requisição da URL, caso não seja GET, (POST, DELETE, etc) enviará o status 405.
    if(req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        email: 'mariamariamaria@xcfmail.com'
    })
}