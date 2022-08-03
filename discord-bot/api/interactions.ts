export const interactionsApi = (req: Request, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json({name: 'BeeBoo'});
    console.log(req.method, req.body, req.headers);
}