import mongoose from "mongoose";
import HostMessage from "../models/hostMessage.js";

export const getHosts = async (req, res) => {
    try {
        const hostMessage = await HostMessage.find();
        console.log(hostMessage)
        res.status(200).json(hostMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createHost = async (req, res) => {
    const host = req.body;
    const newHost = new HostMessage(host);
    try {
        await newHost.save();
        res.status(201).json(newHost);
    } catch (error) {
        console.log(error)
        res.status(409).json({message: error.message});
    }
}

export const updateHost = async (req, res) => {
    const { hostid: _id } = req.params;
    const host = req.body;

    const updatedHost = await HostMessage.findByIdAndUpdate(_id, {...host, _id}, { new: true })

    res.json(updatedHost);
}

export const deleteHost = async (req, res) => {
    const { hostid } = req.params;

    if(!mongoose.Types.ObjectId.isValid(hostid)) return res.status(404).send("No Host With That Id");

    await HostMessage.findByIdAndRemove(hostid);

    res.json({ message: 'Host Deleted Successfully' })
}