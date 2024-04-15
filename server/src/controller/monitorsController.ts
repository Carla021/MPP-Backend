import { generateUniqueId, monitors } from "../dataStore";
import { Monitor } from "../model/monitor";

import { Request, Response } from 'express';

export const getMonitors = (req: Request, res: Response) => {
    res.json(monitors);
};

export const getMonitorById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const monitor = monitors.find(monitor => monitor.getId() == id);
    if(monitor) {
        res.json(monitor);
    } else {
        res.status(404).send('Monitor not found');
    }
};

export const addMonitor = async (req: Request, res: Response) => {
    try {
        const {brand, refreshRate, pictureUrl} = req.body;

        const id = generateUniqueId();
        const newMonitor = new Monitor(
            id,
            brand,
            refreshRate,
            pictureUrl
        );
        monitors.push(newMonitor);
        return res.status(201).json(newMonitor);
    } catch (error) {
        console.error('Error adding monitor:', error);
        return res.status(500).json({message: 'Server error'});
    }
}

export const deleteMonitor = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = monitors.findIndex(monitor => monitor.getId() === id);
    if (index > -1) {
        monitors.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Monitor not found');
    }
}

export const updateMonitor = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const monitor = monitors.find(monitor => monitor.getId() === id);
    if (monitor) {
        const {brand, refreshRate, pictureUrl} = req.body;
        monitor.setBrand(brand);
        monitor.setRefreshRate(refreshRate);
        monitor.setPictureUrl(pictureUrl);
        res.json(monitor);
    } else {
        res.status(404).send('Monitor not found');
    }
}

