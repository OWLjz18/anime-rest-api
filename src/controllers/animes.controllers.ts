import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from './../database';

interface AnimeProps {
  id: string | number,
  name: string,
  episodes: number
}

const getAllAnimes = async (req: Request, res: Response): Promise<Response> => {
  
  const response: QueryResult = await pool.query('SELECT * FROM animes;');
  const animes: AnimeProps[] = response.rows;
  
  return res.json(animes);
  
};

const getAnimesCount = async (req: Request, res: Response): Promise<Response> => {
  
  const response: QueryResult = await pool.query('SELECT count(*) FROM animes;');
  const count: number = parseInt(response.rows[0].count);
  
  return res.json(count);
  
};

const getAnimeById = async (req: Request, res: Response): Promise<Response> => {
  
  const id: string | number = req.params.id;
  const response: QueryResult = await pool.query(`SELECT * FROM animes WHERE id = ${id};`);
  const anime: AnimeProps = response.rows[0];
  
  if (!anime) return res.status(404).json({ error: 'Anime not found.' })
  
  return res.json(anime);
  
};

const addAnime = async (req: Request, res: Response): Promise<Response> => {
  
  const { name, episodes }: { name: string, episodes: number } = req.body;
  
  if (!name || !episodes) { 
    
    return res.status(400).json({ error: 'Missing arguments.' });

  }
  
  await pool.query(`INSERT INTO animes (name, episodes) VALUES ('${name}', ${episodes});`)
  
  return res.json({ message: 'Anime added successfully.' });
  
};

const updateAnime = async (req: Request, res: Response): Promise<Response> => {
  
  const dataAnime: AnimeProps = {
    id: req.params.id,
    name: req.body.name,
    episodes: req.body.episodes
  };
  
  await pool.query(`UPDATE animes SET name = '${dataAnime.name}', episodes = ${dataAnime.episodes} WHERE id = ${dataAnime.id};`);
  
  return res.json({ message: 'Anime updated successfully.' });
  
};

const deleteAnime = async (req: Request, res: Response): Promise<Response> => {
  
  const id: string | number = req.params.id;
  await pool.query(`DELETE FROM animes WHERE id = ${id};`);
  
  return res.json({ message: 'Anime deleted successfully.' });
  
};

export {
  getAllAnimes,
  getAnimesCount,
  getAnimeById,
  addAnime,
  updateAnime,
  deleteAnime
}
