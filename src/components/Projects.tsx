import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';

const Projects = () => {
  const projectImages = {
    1: project6,
    2: project2,
    3: project5,
    4: project1, 
    5: project3,
    6: project4,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the solutions I've built
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl glass">
                    <img
                      src={projectImages[project.id as keyof typeof projectImages]}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass border-foreground/20 text-foreground hover:bg-foreground/10"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="glass hover-scale">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold gradient-text">
                          {project.title}
                        </h3>
                        <Star className="w-6 h-6 text-yellow-500 fill-current" />
                      </div>
                      <p className="text-lg text-foreground/90 leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass hover-glow cursor-pointer h-full">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={projectImages[project.id as keyof typeof projectImages]}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="bg-background/80 text-foreground hover:bg-background/90 backdrop-blur p-2"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="bg-background/80 text-foreground hover:bg-background/90 backdrop-blur p-2"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3 gradient-text">
                        {project.title}
                      </h4>
                      <p className="text-foreground/80 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;