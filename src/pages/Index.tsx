import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Award, Code, BookOpen, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
  {/* Cabecalho */}
  <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 rounded-full bg-muted border-4 border-primary/20 shadow-lg overflow-hidden">
          <img 
            src="../../public/foto_perfil.jpg" 
            alt="Foto Perfil" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="mb-4 inline-block">
            <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center p-2">
              <img 
                src="../../public/UNIFILlogo.png" 
                alt="Logo Unifil" 
                className="w-full h-full object-contain"
              />
            </div>
            <span>UNIFIL</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gabriel Mendes Rodrigues
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Estudante de Ciência da Computação | Desenvolvedor
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <Button variant="default" size="lg" asChild>
              <a href="https://github.com/GabrielMendesR" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:mendes@edu.unifil.br">
                <Mail className="mr-2 h-5 w-5" />
                Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Sobre */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu nome é Gabriel, atualmente estou no último ano de Ciência da Computação
                na UNIFIL e esse é meu Portfólio :)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Habilidades e Interesses */}
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
                  <Badge>Python</Badge>
                  <Badge>Kotlin</Badge>
                  <Badge>Java</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>SQL</Badge>
                  <Badge>GIT</Badge>
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
                  <Badge variant="outline">Inteligência Artificial</Badge>
                  <Badge variant="outline">Data Science</Badge>
                  <Badge variant="outline">Desenvolvimento Backend</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos Acadêmicos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TCC */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Trabalho de Conclusão de Curso (TCC)</CardTitle>
                <CardDescription>TCC</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolvimento da pesquisa "Como a Inteligência Artificial Impacta no Mercado de Trabalho e na Empregabilidade"
                </p>
                 <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://drive.google.com/file/d/1hNYSiN7Ez3Icbwt7bpmZYBN7ZkRvvRAU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver TCC Completo
                    </a>
                </Button>
              </CardContent>
            </Card>

            {/* Estágio */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Projeto de Estágio</CardTitle>
                <CardDescription>Empresa - Coramais Comunicação Visual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolvimento do Projeto COSERV, uma plataforma para a empresa Coramais conseguir gerenciar as 
                  Ordens de Serviço(OS) e um aplicativo para os clientes acompanharem os detalhes e serviços em andamento 
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Kotlin</Badge>
                  <Badge variant="secondary">Java</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://github.com/GabrielMendesR/ProjetoEstagio" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver TCC Completo
                    </a>
                </Button>
              </CardContent>
            </Card>

            {/* Extensão */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Projeto de Extensão - ONGWeb</CardTitle>
                <CardDescription>Projeto Comunitário</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  O ONGWeb é uma iniciativa voltada para o desenvolvimento de sites personalizados e acessíveis, 
                  projetados especificamente para atender às necessidades únicas de ONGs de todos os tipos e tamanhos. 
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://github.com/GabrielMendesR/WebSite_ONG" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver TCC Completo
                    </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trabalhos Bimestre */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Trabalhos do Bimestre</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Trabalho de compiladores
                </CardTitle>
                <CardDescription>Disciplina de compiladoesr</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolvimento de um Algoritimo implementando um parser LR(0) em C
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://github.com/GabrielMendesR/Trabalho-Compiladores-Algoritimo-LR-0-" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver TCC Completo
                    </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  IA: ALG. EVOLUTIVOS
                </CardTitle>
                <CardDescription>Disciplina de Inteligência Artificial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Desenvolvimento de um algoritmo genético (GA) para escolher automaticamente as melhores colunas (features) do dataset de doenças cardíacas do Kaggle, 
                  maximizando a acurácia de um modelo de Machine Learning (nesse caso regressão logística).
                </p>
                 <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://colab.research.google.com/drive/1-4bUzc7iZTnv4hYy5G-yjLQjbJSnQfJ_#scrollTo=-W88oPjlFUSS" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver TCC Completo
                    </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Hackathons & Eventos</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Ideathon Smart Agro 2023
                </CardTitle>
                <CardDescription>17/03/2023 a 19/03/2023</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="../../public/CertificadoIdeathon.png"  alt="Certificado"></img>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Hackathon Smart Agro 2023 (Curso)
                </CardTitle>
                <CardDescription>14/04/2023 a 16/04/2023</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="../../public/CertificadoHackathon.png" alt="Certificado"></img>
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
              <h3 className="font-bold text-lg mb-2">Gabriel Mendes Rodrigues</h3>
              <p className="text-sm text-muted-foreground">
                Portfólio Acadêmico - Ciência da Comnputação
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/GabrielMendesR" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/gabriel-mendes-rodrigues-1275a6241/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mendes@edu.unifil.br">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>© 2025 Gabriel Mendes Rodrigues. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
