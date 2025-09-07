import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and learn about my journey in tech
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
              
              <Card className="relative glass w-full h-full rounded-3xl overflow-hidden hover-scale">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-foreground">
                      {personalInfo.initials}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass hover-scale">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  My Journey
                </h3>
                
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                  <p>
                    {personalInfo.description}
                  </p>
                  
                  <p>
                    My journey in technology started with curiosity and has evolved into a 
                    passion for solving complex problems through code. I enjoy the challenge 
                    of learning new technologies and applying them to create meaningful solutions.
                  </p>

                  <p>
                    When I'm not coding, you can find me exploring the latest tech trends, 
                    contributing to open-source projects, or sharing my knowledge with the 
                    developer community. I believe in continuous learning and the power of 
                    collaboration to drive innovation.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">3+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">16</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;