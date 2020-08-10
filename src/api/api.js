import Axios from 'axios';

export const getOwner = async () => {
    try {
        Axios.get('http://localhost:5000/api/owner/')   
    } catch (error) {
        throw new Error(error);
    }
}

export const getArticle = async (id) => {
    try {
        const article = await Axios.get('http://localhost:5000/api/articles/'+ id,{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        });
        return article.data;    
    } catch (error) {
        throw new Error(error);
    }
}

export const getArticles = async () => {
    try {
        const articles = await Axios.get('http://localhost:5000/api/articles/', {
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        });
        return articles.data;    
    } catch (error) {
        throw new Error(error);
    }
}

export const getProject = async (id) => {
    try {
        const project = await Axios.get('http://localhost:5000/api/projects/'+ id,{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        })
        return project.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getProjects = async () => {
    try {
        const projects = await Axios.get('http://localhost:5000/api/projects/',{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        })
        return projects.data;
    } catch (error) {
        throw new Error(error);
    }
}