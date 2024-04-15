import express from "express";
import { addMonitor, deleteMonitor, getMonitorById, getMonitors, updateMonitor } from "../controller/monitorsController";

const router = express.Router();

router.get('/monitors', getMonitors);
router.get('/monitor/:id', getMonitorById);
router.post('/addMonitor', addMonitor);
router.delete('/monitors/:id', deleteMonitor);
router.put('/monitors/:id', updateMonitor);

export default router;