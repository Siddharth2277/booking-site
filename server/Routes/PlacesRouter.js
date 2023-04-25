import {Router} from "express";
import PlacesRoute from "../functions/PlacesRoute.js";
const PlacesRouter = Router()

PlacesRouter.get("",PlacesRoute)

export default PlacesRouter