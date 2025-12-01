exports.PageNotFound = (req, res, next) =>{

    // For attech html 404  file
    res.status(404).render('404' , {Pagetitle: 'Page Not Found', currentPage: '404'});

}