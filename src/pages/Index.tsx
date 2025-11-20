import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Award, Code, BookOpen, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center border-4 border-primary/20 shadow-lg">
              <span className="text-muted-foreground text-sm">Sua Foto</span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              {/* University Logo Placeholder */}
              <div className="mb-4 inline-block">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Logo UniCesumar</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Seu Nome Completo
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Estudante de [Seu Curso] | Desenvolvedor(a)
              </p>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="default" size="lg" asChild>
                  <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:seuemail@exemplo.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Contato
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                [Escreva aqui uma breve descrição pessoal sobre você, sua jornada acadêmica, 
                suas motivações e o que você busca na área de tecnologia. Exemplo: "Sou estudante 
                de Ciência da Computação apaixonado por desenvolvimento de software e inovação..."]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades & Interesses</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Tecnologias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge variant="secondary">Adicione suas tecnologias</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Áreas de Interesse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Desenvolvimento Web</Badge>
                  <Badge variant="outline">Inteligência Artificial</Badge>
                  <Badge variant="outline">Adicione seus interesses</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos Acadêmicos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TCC */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Trabalho de Conclusão de Curso</CardTitle>
                <CardDescription>TCC</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva seu TCC aqui - título, área de pesquisa, objetivos principais]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tecnologia 1</Badge>
                  <Badge variant="secondary">Tecnologia 2</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>

            {/* Estágio */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Projeto de Estágio</CardTitle>
                <CardDescription>Estágio - [Empresa]</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o projeto desenvolvido durante o estágio, suas responsabilidades e aprendizados]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tecnologia 1</Badge>
                  <Badge variant="secondary">Tecnologia 2</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>

            {/* Extensão */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Projeto de Extensão</CardTitle>
                <CardDescription>Extensão Universitária</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva seu projeto de extensão, impacto na comunidade e tecnologias utilizadas]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tecnologia 1</Badge>
                  <Badge variant="secondary">Tecnologia 2</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>

            {/* Projeto do Curso 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Nome do Projeto</CardTitle>
                <CardDescription>Disciplina X - Semestre Y</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o projeto desenvolvido na disciplina]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tecnologia 1</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>

            {/* Projeto do Curso 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Nome do Projeto</CardTitle>
                <CardDescription>Disciplina X - Semestre Y</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o projeto desenvolvido na disciplina]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tecnologia 1</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>

            {/* Adicione mais projetos conforme necessário */}
            <Card className="hover:shadow-lg transition-shadow border-dashed">
              <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">Adicione Mais Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Duplique este card para adicionar mais projetos do curso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bimester Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Trabalhos do Bimestre</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Trabalho 1
                </CardTitle>
                <CardDescription>Disciplina / Matéria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o trabalho realizado neste bimestre - tema, objetivos e resultados]
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Trabalho
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Trabalho 2
                </CardTitle>
                <CardDescription>Disciplina / Matéria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o trabalho realizado neste bimestre]
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Trabalho
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Trabalho 3
                </CardTitle>
                <CardDescription>Disciplina / Matéria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o trabalho realizado neste bimestre]
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Trabalho
                </Button>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-muted-foreground">Adicione Mais Trabalhos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Duplique este card para adicionar mais trabalhos do bimestre
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hackathons & Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Hackathons & Eventos</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Nome do Hackathon/Evento
                </CardTitle>
                <CardDescription>Data do Evento - Local/Online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva sua participação, o projeto desenvolvido, prêmios conquistados e aprendizados]
                </p>
                <div className="flex gap-2">
                  <Badge>Conquista/Prêmio</Badge>
                  <Badge variant="outline">Tecnologia Utilizada</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Nome do Evento/Workshop
                </CardTitle>
                <CardDescription>Data do Evento - Local/Online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  [Descreva o evento, workshops, palestras assistidas e networking]
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Tema do Evento</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-muted-foreground">Adicione Mais Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Duplique este card para adicionar mais participações em eventos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Seu Nome</h3>
              <p className="text-sm text-muted-foreground">
                Portfólio Acadêmico - [Seu Curso]
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:seuemail@exemplo.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>© 2024 Seu Nome. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
