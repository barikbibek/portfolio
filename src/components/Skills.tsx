import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">
                <Badge variant="outline" className="px-4 py-2 text-lg border-primary/50 text-primary">
                  {category}
                </Badge>
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5
                      }}
                      className="group perspective-1000"
                    >
                      <Card className="glass hover-scale hover-glow cursor-pointer group-hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <skill.icon className={`mx-auto text-5xl ${skill.color}`} />
                          </div>
                          <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Continuous Learning Journey
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm constantly expanding my skillset and staying up-to-date with the latest 
                technologies. Each project is an opportunity to learn something new and 
                apply best practices in real-world scenarios.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <Badge variant="secondary" className="px-3 py-1">Problem Solving</Badge>
                <Badge variant="secondary" className="px-3 py-1">Team Collaboration</Badge>
                <Badge variant="secondary" className="px-3 py-1">Clean Code</Badge>
                <Badge variant="secondary" className="px-3 py-1">Agile Development</Badge>
                <Badge variant="secondary" className="px-3 py-1">Test-Driven Development</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;