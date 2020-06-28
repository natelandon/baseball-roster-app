import { 
        addNewPlayer,
        getPlayer,
        getPlayerWithID,
        UpdatePlayer,
        DeletePlayer,
    } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayer)
    //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    //Get Player
        .get(getPlayerWithID)
        //Update Player
        .put(UpdatePlayer)
        //Delete Player
        .delete(DeletePlayer)
        
}

export default routes;

