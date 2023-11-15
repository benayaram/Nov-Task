import React from 'react';
import { Grid, Button } from '@mui/material';
import './Projects.css'; // Ensure the CSS file path is correct
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FBGL MINISTRIES APP',
      description:'This is an Android App For a Church',
      image: 'https://user-images.githubusercontent.com/96018533/260242239-292c1158-b7be-4773-a9f7-6065567af220.png', // Replace with your image URL
      githubLink: 'https://github.com/benayaram/FBGL-MINISTRIES-APP', // Replace with GitHub link
      linkedinLink: 'https://www.linkedin.com/in/rekha-benayaram/', // Replace with LinkedIn link
      developer: 'Benayaram Rekha',
    },
    {
      id: 2,
      title: 'Latha Digitals App',
      description:'This is an Android App For a Photography Studio',
      image: 'https://media.licdn.com/dms/image/D5622AQGVDYBoaqdetA/feedshare-shrink_1280/0/1693418675898?e=1703116800&v=beta&t=cClRjVp2j9RWimQqhCkPygdvdtfokFFxElgD41KA7Rs',
      githubLink: 'https://github.com/benayaram/Latha_digitals',
      linkedinLink: 'https://www.linkedin.com/posts/rekha-benayaram_android-java-xml-activity-7102712734240145408-Lx-p?utm_source=share&utm_medium=member_desktop',
      developer: 'Benayaram Rekha',
    },
    {
      id: 3,
      title: 'File Structure Generator',
      description:'This Project Generate Folders and Files in Local Storage',
      image: 'https://media.licdn.com/dms/image/sync/D5627AQFq1VXma5MrMw/articleshare-shrink_1280_800/0/1699670202358?e=1700575200&v=beta&t=akZ0rJKlqnJmuYKi9kUtGK5X35fNYHUZMhMohFBf-TQ',
      githubLink: 'https://github.com/benayaram/BuildStructo-File-structure-generator',
      linkedinLink: 'https://www.linkedin.com/posts/rekha-benayaram_im-happy-to-share-this-file-structure-genarator-activity-7123850071107915776-xd_m?utm_source=share&utm_medium=member_desktop',
      developer: 'Benayaram Rekha',
    },
    {
      id: 4,
      title: 'BENAI -AI Project ',
      description:'This is An AI Like Software as a Service(SaaS)',

      image: 'https://user-images.githubusercontent.com/96018533/282790038-bac73d87-10cf-4d9b-ad0f-f7bf6dbf1d41.png',
      githubLink: 'https://github.com/benayaram/BENAI_new',
      linkedinLink: 'https://www.linkedin.com/in/rekha-benayaram/',
      developer: 'Benayaram Rekha',
    },
    {
      id: 5,
      title: 'Project 2',
      image: 'https://th.bing.com/th/id/OIP.WVbNLUl0QSd2xUjdTBdYXgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      githubLink: 'https://github.com/your_username/project2',
      linkedinLink: 'https://www.linkedin.com/your_project2_post_link',
      developer: 'Developer 2',
    },
    {
      id: 6,
      title: 'Project 2',
      image: 'https://th.bing.com/th/id/OIP.WVbNLUl0QSd2xUjdTBdYXgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      githubLink: 'https://github.com/your_username/project2',
      linkedinLink: 'https://www.linkedin.com/your_project2_post_link',
      developer: 'Developer 2',
    },
    {
      id: 7,
      title: 'Project 2',
      image: 'https://th.bing.com/th/id/OIP.WVbNLUl0QSd2xUjdTBdYXgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      githubLink: 'https://github.com/your_username/project2',
      linkedinLink: 'https://www.linkedin.com/your_project2_post_link',
      developer: 'Developer 2',
    },
    {
      id: 8,
      title: 'Project 2',
      image: 'https://th.bing.com/th/id/OIP.WVbNLUl0QSd2xUjdTBdYXgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      githubLink: 'https://github.com/your_username/project2',
      linkedinLink: 'https://www.linkedin.com/your_project2_post_link',
      developer: 'Developer 2',
    },
    // Add more project objects here
  ];

  const openGithubLink = (link) => {
    window.open(link, '_blank');
  };

  const openLinkedInLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Grid container spacing={3} className="project-grid">
      {projects.map((project) => (
        <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
          <div className='cardpadding'>
            <div className="card">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-details">
                <h3>{project.title}</h3>
                <p>Description :{project.description}</p>
                <p>Developer: {project.developer}</p>
              
                <div className='buttongroup'>
                <Button variant="contained" onClick={() => openGithubLink(project.githubLink)}>
                  GitHub
                </Button>
                <Button variant="contained" onClick={() => openLinkedInLink(project.linkedinLink)}>
                  LinkedIn
                </Button>
                  </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;