const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res){
    const result = await service.list();
    res.json({data: await Promise.all(result.map( async (item) => { 
        const movies = await service.moviesByTheater(item.theater_id);
        item.movies = movies;
        return item}))
    });
};
module.exports = {
    list: [asyncErrorBoundary(list)],
  };