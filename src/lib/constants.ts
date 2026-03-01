import {
  Users,
  Target,
  Handshake,
  BarChart3,
  Award,
  Leaf,
  GraduationCap,
  HeartPulse,
  Building2,
  TreePine,
  HardHat,
  Lightbulb,
  FileText,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Instituto Rede",
  fullName: "Instituto Rede de Apoio",
  description:
    "Há mais de 20 anos transformando desafios em soluções para a gestão pública e o desenvolvimento social.",
  url: "https://institutorededeapoio.org.br",
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/atuacao", label: "Atuação" },
  { href: "/projetos", label: "Projetos" },
  { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { href: "/transparencia", label: "Transparência" },
];

export const contactLinks = [
  { href: "/contato", label: "Fale Conosco" },
  { href: "/ouvidoria", label: "Ouvidoria" },
];

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: Users,
    title: "Equipe Multifacetada",
    description:
      "Profissionais de diversas áreas do conhecimento, garantindo soluções completas e integradas para cada desafio.",
  },
  {
    icon: Target,
    title: "Compromisso com Resultados",
    description:
      "Foco em entregas mensuráveis e impacto real nas comunidades e organizações que atendemos.",
  },
  {
    icon: Handshake,
    title: "Colaboração Intersetorial",
    description:
      "Articulação entre setor público, privado e sociedade civil para potencializar resultados.",
  },
  {
    icon: BarChart3,
    title: "Análises Detalhadas",
    description:
      "Diagnósticos baseados em dados e evidências para fundamentar decisões estratégicas.",
  },
  {
    icon: Award,
    title: "Execução com Excelência",
    description:
      "Processos consolidados e equipe capacitada para entregar projetos com qualidade e no prazo.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade Estratégica",
    description:
      "Soluções que consideram o impacto ambiental, social e econômico a longo prazo.",
  },
];

interface AreaOfAction {
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
}

export const areasOfAction: AreaOfAction[] = [
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Soluções integradas para a gestão educacional pública.",
    topics: [
      "Gestão de redes de ensino",
      "Formação de educadores",
      "Avaliação educacional",
      "Tecnologia na educação",
      "Políticas educacionais",
    ],
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    description: "Apoio estratégico para a gestão da saúde pública.",
    topics: [
      "Gestão hospitalar",
      "Atenção primária",
      "Vigilância em saúde",
      "Planejamento em saúde",
      "Capacitação profissional",
    ],
  },
  {
    icon: Building2,
    title: "Administração Pública",
    description: "Modernização e eficiência na gestão governamental.",
    topics: [
      "Planejamento estratégico",
      "Gestão de processos",
      "Transformação digital",
      "Gestão de pessoas",
      "Controle interno",
    ],
  },
  {
    icon: TreePine,
    title: "Sustentabilidade",
    description: "Desenvolvimento sustentável e responsabilidade ambiental.",
    topics: [
      "Políticas ambientais",
      "Gestão de resíduos",
      "Educação ambiental",
      "Licenciamento ambiental",
      "Projetos de conservação",
    ],
  },
  {
    icon: HardHat,
    title: "Infraestrutura",
    description: "Planejamento e gestão de obras e infraestrutura.",
    topics: [
      "Gestão de obras públicas",
      "Planejamento urbano",
      "Mobilidade urbana",
      "Saneamento básico",
      "Habitação",
    ],
  },
];

interface PublicManagementService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const publicManagementServices: PublicManagementService[] = [
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Soluções",
    description:
      "Criação de soluções personalizadas para desafios específicos da gestão pública.",
  },
  {
    icon: FileText,
    title: "Elaboração e Gestão",
    description:
      "Elaboração de projetos, planos e programas com acompanhamento completo da execução.",
  },
  {
    icon: Activity,
    title: "Monitoramento e Capacitação",
    description:
      "Acompanhamento de indicadores e formação de equipes para resultados sustentáveis.",
  },
];

interface ImpactNumber {
  value: number;
  suffix: string;
  label: string;
}

export const impactNumbers: ImpactNumber[] = [
  { value: 20, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Projetos realizados" },
  { value: 80, suffix: "+", label: "Municípios atendidos" },
  { value: 500, suffix: "+", label: "Colaboradores" },
];

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2003",
    title: "Fundação",
    description:
      "O Instituto Rede nasce com a missão de apoiar a gestão pública e promover o desenvolvimento social no Brasil.",
  },
  {
    year: "2010",
    title: "Expansão Nacional",
    description:
      "Ampliação da atuação para diversas regiões do país, consolidando parcerias com governos estaduais e municipais.",
  },
  {
    year: "2016",
    title: "Diversificação de Áreas",
    description:
      "Início da atuação em novas áreas como saúde, sustentabilidade e infraestrutura, além da educação.",
  },
  {
    year: "2020",
    title: "Transformação Digital",
    description:
      "Adaptação dos serviços ao contexto digital, desenvolvendo soluções tecnológicas inovadoras para a gestão pública.",
  },
  {
    year: "Atual",
    title: "Referência Nacional",
    description:
      "Reconhecido como uma das principais organizações de apoio à gestão pública do Brasil, com atuação em mais de 80 municípios.",
  },
];

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Programa de Alfabetização Municipal",
    category: "Educação",
    description:
      "Implementação de programa de alfabetização em 30 municípios, beneficiando mais de 50 mil alunos.",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "2",
    title: "Reestruturação da Atenção Básica",
    category: "Saúde",
    description:
      "Reorganização da rede de atenção primária à saúde em parceria com secretarias municipais.",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "3",
    title: "Modernização da Gestão Fiscal",
    category: "Administração Pública",
    description:
      "Implantação de sistemas integrados de gestão fiscal e financeira em governos municipais.",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "4",
    title: "Plano Municipal de Saneamento",
    category: "Infraestrutura",
    description:
      "Elaboração e implementação de planos municipais de saneamento básico em conformidade com a legislação vigente.",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "5",
    title: "Programa de Educação Ambiental",
    category: "Sustentabilidade",
    description:
      "Desenvolvimento de programa de educação ambiental para escolas públicas com foco em sustentabilidade.",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "6",
    title: "Capacitação de Gestores Públicos",
    category: "Administração Pública",
    description:
      "Programa de formação continuada para gestores públicos em planejamento estratégico e gestão de resultados.",
    image: "/images/project-placeholder.svg",
  },
];

export const projectCategories = [
  "Todos",
  "Educação",
  "Saúde",
  "Administração Pública",
  "Infraestrutura",
  "Sustentabilidade",
];

interface TransparencyDocument {
  title: string;
  year: string;
  category: string;
  description: string;
  fileUrl: string;
}

export const transparencyDocuments: TransparencyDocument[] = [
  {
    title: "Relatório Anual de Atividades 2024",
    year: "2024",
    category: "Relatório",
    description: "Relatório completo das atividades realizadas no ano de 2024.",
    fileUrl: "#",
  },
  {
    title: "Demonstrações Financeiras 2024",
    year: "2024",
    category: "Financeiro",
    description: "Balanço patrimonial e demonstrações contábeis do exercício de 2024.",
    fileUrl: "#",
  },
  {
    title: "Relatório Anual de Atividades 2023",
    year: "2023",
    category: "Relatório",
    description: "Relatório completo das atividades realizadas no ano de 2023.",
    fileUrl: "#",
  },
  {
    title: "Demonstrações Financeiras 2023",
    year: "2023",
    category: "Financeiro",
    description: "Balanço patrimonial e demonstrações contábeis do exercício de 2023.",
    fileUrl: "#",
  },
  {
    title: "Estatuto Social",
    year: "2022",
    category: "Institucional",
    description: "Estatuto social atualizado do Instituto Rede.",
    fileUrl: "#",
  },
  {
    title: "Política de Compliance",
    year: "2022",
    category: "Compliance",
    description: "Documento com as políticas e práticas de compliance adotadas.",
    fileUrl: "#",
  },
];

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Analista de Projetos Educacionais",
    department: "Educação",
    location: "São Paulo, SP",
    type: "CLT - Tempo Integral",
    description:
      "Responsável por planejar, executar e monitorar projetos na área de educação pública.",
  },
  {
    id: "2",
    title: "Consultor(a) em Gestão Pública",
    department: "Administração",
    location: "Brasília, DF",
    type: "CLT - Tempo Integral",
    description:
      "Atuar na assessoria e consultoria para órgãos públicos em processos de modernização.",
  },
  {
    id: "3",
    title: "Coordenador(a) de Saúde",
    department: "Saúde",
    location: "Rio de Janeiro, RJ",
    type: "CLT - Tempo Integral",
    description:
      "Coordenar projetos e equipes na área de saúde pública, garantindo qualidade e resultados.",
  },
];

export const offices = [
  {
    city: "São Paulo",
    address: "Av. Paulista, 1000 - Bela Vista",
    cep: "01310-100",
    phone: "(11) 3000-0000",
  },
  {
    city: "Brasília",
    address: "SCS Quadra 01, Bloco A - Asa Sul",
    cep: "70300-000",
    phone: "(61) 3000-0000",
  },
];
