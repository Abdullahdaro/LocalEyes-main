import express from 'express';
import { getHosts, createHost, updateHost, deleteHost } from '../controllers/hosts.js';

const router = express.Router();

router.get('/', getHosts);
router.post('/', createHost);
router.patch('/:id', updateHost);
router.delete('/:id', deleteHost);

export default router;