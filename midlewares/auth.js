const verifyAdmin = (req,res, next) => {
    req.session.idUser && req.session.admin == 1
    ? (next())
    : res.redirect('/login');
}

const verifyUser = (req,res, next) => {
    req.session.idUser
    ? (next())
    : res.redirect('/login');
}

module.exports  = {verifyAdmin, verifyUser};