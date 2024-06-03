// hooks/useProjects.js
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { USER_NAME } from '../config';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log('Fetching projects...');
      try {
        const response = await axios.get(`https://api.github.com/users/${USER_NAME}/repos`);
        console.log('Projects fetched:', response.data);
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        console.log('Setting loading state to false...');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {loading, projects };
};

export default useProjects;
